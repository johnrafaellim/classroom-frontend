import { CreateView } from "@/components/refine-ui/views/create-view.tsx";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useBack, useList } from "@refinedev/core";
import { Separator } from "@/components/ui/separator.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";
import { classSchema } from "@/lib/schema.ts";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea";
import UploadWidget from "@/components/upload-widget.tsx";
import { Subject, User } from "@/types";

const Create = () => {
  const back = useBack();

  const form = useForm({
    resolver: zodResolver(classSchema),
    refineCoreProps: {
      resource: "classes",
      action: "create",
    },
    defaultValues: {
      name: "",
      subjectId: undefined,
      teacherId: undefined,
      capacity: undefined,
      status: "active",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    refineCore: { onFinish },
  } = form;

  const onSubmit = async (values: z.infer<typeof classSchema>) => {
    try {
      await onFinish(values);
    } catch (e) {
      console.error("Error creating new classes", e);
    }
  };

  const onInvalid = (errors: typeof form.formState.errors) => {
    console.log("Validation errors:", errors);
  };

  const { query: subjectsQuery } = useList<Subject>({
    resource: "subjects",
    pagination: {
      pageSize: 100,
    },
  });

  const { query: teachersQuery } = useList<User>({
    resource: "users",
    filters: [{ field: "role", operator: "eq", value: "teacher" }],
    pagination: {
      pageSize: 100,
    },
  });

  const subjects = subjectsQuery?.data?.data || [];
  const subjectsLoading = subjectsQuery.isLoading;

  const teachers = teachersQuery?.data?.data || [];
  const teachersLoading = teachersQuery.isLoading;

  const bannerPublicId = form.watch("bannerCldPubId");

  const setBannerImage = (file: any, field: any) => {
    if (file) {
      // Update the banner image URL in the form field.
      field.onChange(file.url);

      // Save the Cloudinary public ID,
      // validate the field immediately,
      // and mark it as changed from its default value.
      form.setValue("bannerCldPubId", file.publicId, {
        shouldValidate: true,
        shouldDirty: true,
      });
    } else {
      // Clear the banner image URL when no file is selected.
      field.onChange("");

      // Clear the Cloudinary public ID,
      // validate the empty value,
      // and mark the field as changed.
      form.setValue("bannerCldPubId", "", {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  };

  return (
    <CreateView className="class-view">
      <Breadcrumb />

      <h1 className="page-title">Create a class</h1>

      <div className="intro-row">
        <p>Provide the required information below to add a class.</p>
        <Button onClick={() => back()}>Go Back</Button>
      </div>

      <Separator />

      <div className="my-4 flex items-center">
        <Card className="class-form-card">
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl pb-0 font-bold">
              Fill out the form
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="mt-7">
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit, onInvalid)}
                className="space-y-5"
              >
                {/* Upload Form */}
                <Controller
                  name="bannerUrl"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Banner Images
                        <span className="text-orange-600" aria-hidden="true">
                          *
                        </span>
                      </FieldLabel>

                      <UploadWidget
                        value={
                          field.value
                            ? {
                                url: field.value,
                                publicId: bannerPublicId ?? "",
                              }
                            : null
                        }
                        onChange={(file: any) => setBannerImage(file, field)}
                      />

                      {(fieldState.error || errors.bannerCldPubId) && (
                        <FieldError
                          errors={[fieldState.error ?? errors.bannerCldPubId]}
                        />
                      )}
                    </Field>
                  )}
                />

                {/* Class Name */}
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Class Name
                        <span className="text-orange-600" aria-hidden="true">
                          *
                        </span>
                      </FieldLabel>

                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        aria-required="true"
                        placeholder="Introduction to Biology (Section A)"
                        autoComplete="off"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Subject */}
                  <Controller
                    name="subjectId"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Subject
                          <span className="text-orange-600" aria-hidden="true">
                            *
                          </span>
                        </FieldLabel>

                        <Select
                          value={field.value?.toString() ?? ""}
                          onValueChange={(value) => {
                            field.onChange(Number(value));
                          }}
                          disabled={subjectsLoading}
                        >
                          <SelectTrigger
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            aria-required="true"
                          >
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>

                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem
                                key={subject.id}
                                value={subject.id.toString()}
                              >
                                {subject.name} ({subject.code})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {/* Teacher */}
                  <Controller
                    name="teacherId"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Teacher
                          <span className="text-orange-600" aria-hidden="true">
                            *
                          </span>
                        </FieldLabel>

                        <Select
                          value={field.value?.toString() ?? ""}
                          onValueChange={field.onChange}
                          disabled={teachersLoading}
                        >
                          <SelectTrigger
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            aria-required="true"
                          >
                            <SelectValue placeholder="Select a teacher" />
                          </SelectTrigger>

                          <SelectContent>
                            {teachers.map((teacher) => (
                              <SelectItem
                                key={teacher.id}
                                value={teacher.id.toString()}
                              >
                                {teacher.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Capacity */}
                  <Controller
                    name="capacity"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Capacity
                          <span className="text-orange-600" aria-hidden="true">
                            *
                          </span>
                        </FieldLabel>

                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          aria-required="true"
                          placeholder="30"
                          autoComplete="off"
                          type="number"
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {/* Status */}
                  <Controller
                    name="status"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Status</FieldLabel>

                        <Select
                          value={field.value?.toString() ?? ""}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            aria-required="true"
                          >
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                          </SelectContent>
                        </Select>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>

                {/* Description */}
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Description</FieldLabel>

                      <Textarea
                        {...field}
                        id={field.name}
                        placeholder="Brief description about the class"
                        rows={4}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Field>
                  <Button type="submit" className="w-full">
                    Create Class
                  </Button>
                </Field>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </CreateView>
  );
};

export default Create;
