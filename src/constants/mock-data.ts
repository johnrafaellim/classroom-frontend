import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description:
            "An introductory course covering the fundamental concepts of computer science and programming.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH101",
        name: "College Algebra",
        department: "Mathematics",
        description:
            "Introduces algebraic expressions, equations, inequalities, functions, and mathematical problem solving.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG101",
        name: "English Composition",
        department: "English",
        description:
            "Develops academic writing, grammar, critical reading, and effective communication skills.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 4,
        code: "PHYS101",
        name: "General Physics I",
        department: "Physics",
        description:
            "Covers fundamental principles of mechanics, motion, forces, energy, and momentum.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 5,
        code: "CHEM101",
        name: "General Chemistry I",
        department: "Chemistry",
        description:
            "Introduces atomic structure, chemical bonding, reactions, stoichiometry, and properties of matter.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 6,
        code: "BIO101",
        name: "General Biology I",
        department: "Biology",
        description:
            "Explores cell biology, genetics, evolution, and fundamental biological processes.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 7,
        code: "HIST101",
        name: "World History",
        department: "History",
        description:
            "Examines major civilizations, historical events, and cultural developments throughout world history.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 8,
        code: "PSY101",
        name: "Introduction to Psychology",
        department: "Psychology",
        description:
            "Introduces major theories and concepts related to human behavior, cognition, and emotion.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 9,
        code: "SOC101",
        name: "Introduction to Sociology",
        department: "Sociology",
        description:
            "Examines social structures, institutions, cultures, and patterns of human interaction.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 10,
        code: "ECON101",
        name: "Principles of Economics",
        department: "Economics",
        description:
            "Introduces fundamental concepts of microeconomics and macroeconomics.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 11,
        code: "CS102",
        name: "Programming Fundamentals",
        department: "Computer Science",
        description:
            "Introduces programming concepts including variables, conditions, loops, functions, and data structures.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 12,
        code: "CS201",
        name: "Data Structures and Algorithms",
        department: "Computer Science",
        description:
            "Studies arrays, linked lists, stacks, queues, trees, graphs, searching, and sorting algorithms.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 13,
        code: "CS202",
        name: "Object-Oriented Programming",
        department: "Computer Science",
        description:
            "Explores object-oriented concepts such as classes, inheritance, polymorphism, and encapsulation.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 14,
        code: "CS203",
        name: "Database Systems",
        department: "Computer Science",
        description:
            "Introduces relational databases, SQL, normalization, database design, and transaction management.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 15,
        code: "CS204",
        name: "Web Development",
        department: "Computer Science",
        description:
            "Covers the fundamentals of building modern web applications using HTML, CSS, and JavaScript.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 16,
        code: "CS205",
        name: "Operating Systems",
        department: "Computer Science",
        description:
            "Studies processes, memory management, file systems, concurrency, and operating system architecture.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 17,
        code: "CS206",
        name: "Computer Networks",
        department: "Computer Science",
        description:
            "Introduces networking concepts including TCP/IP, routing, switching, protocols, and network security.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 18,
        code: "CS207",
        name: "Software Engineering",
        department: "Computer Science",
        description:
            "Examines software development methodologies, requirements, architecture, testing, and maintenance.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 19,
        code: "CS208",
        name: "Computer Architecture",
        department: "Computer Science",
        description:
            "Studies computer hardware organization, processors, memory, instruction sets, and digital systems.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 20,
        code: "CS209",
        name: "Discrete Mathematics",
        department: "Computer Science",
        description:
            "Covers logic, sets, relations, combinatorics, graphs, and mathematical foundations of computing.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 21,
        code: "CS301",
        name: "Artificial Intelligence",
        department: "Computer Science",
        description:
            "Introduces intelligent agents, search algorithms, knowledge representation, and machine learning concepts.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 22,
        code: "CS302",
        name: "Machine Learning",
        department: "Computer Science",
        description:
            "Studies supervised learning, unsupervised learning, model evaluation, and predictive algorithms.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 23,
        code: "CS303",
        name: "Cybersecurity Fundamentals",
        department: "Computer Science",
        description:
            "Introduces information security, cryptography, network threats, authentication, and secure computing.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 24,
        code: "CS304",
        name: "Cloud Computing",
        department: "Computer Science",
        description:
            "Explores cloud infrastructure, virtualization, distributed computing, and cloud-based application deployment.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 25,
        code: "CS305",
        name: "Mobile Application Development",
        department: "Computer Science",
        description:
            "Covers design and development principles for modern mobile applications.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 26,
        code: "CS306",
        name: "Human-Computer Interaction",
        department: "Computer Science",
        description:
            "Examines user-centered design, usability, accessibility, and interaction design principles.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 27,
        code: "CS307",
        name: "Distributed Systems",
        department: "Computer Science",
        description:
            "Studies distributed architectures, communication, synchronization, consistency, and fault tolerance.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 28,
        code: "CS308",
        name: "Compiler Design",
        department: "Computer Science",
        description:
            "Introduces lexical analysis, parsing, syntax trees, semantic analysis, and code generation.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 29,
        code: "CS309",
        name: "Computer Graphics",
        department: "Computer Science",
        description:
            "Explores graphics pipelines, rendering, transformations, lighting, and interactive graphics.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 30,
        code: "CS310",
        name: "Data Science Fundamentals",
        department: "Computer Science",
        description:
            "Introduces data analysis, visualization, statistics, and computational techniques for working with data.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 31,
        code: "MATH102",
        name: "Trigonometry",
        department: "Mathematics",
        description:
            "Studies trigonometric functions, identities, equations, graphs, and practical applications.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 32,
        code: "MATH201",
        name: "Calculus I",
        department: "Mathematics",
        description:
            "Introduces limits, continuity, derivatives, and applications of differential calculus.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 33,
        code: "MATH202",
        name: "Calculus II",
        department: "Mathematics",
        description:
            "Covers integration, sequences, series, and advanced applications of calculus.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 34,
        code: "MATH203",
        name: "Linear Algebra",
        department: "Mathematics",
        description:
            "Studies vectors, matrices, linear transformations, determinants, and eigenvalues.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 35,
        code: "MATH204",
        name: "Probability and Statistics",
        department: "Mathematics",
        description:
            "Introduces probability theory, statistical distributions, estimation, and hypothesis testing.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 36,
        code: "MATH205",
        name: "Differential Equations",
        department: "Mathematics",
        description:
            "Studies ordinary differential equations and mathematical models for real-world systems.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 37,
        code: "MATH301",
        name: "Numerical Analysis",
        department: "Mathematics",
        description:
            "Explores numerical techniques for approximation, interpolation, integration, and equation solving.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 38,
        code: "MATH302",
        name: "Abstract Algebra",
        department: "Mathematics",
        description:
            "Introduces groups, rings, fields, algebraic structures, and mathematical proofs.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 39,
        code: "MATH303",
        name: "Real Analysis",
        department: "Mathematics",
        description:
            "Provides a rigorous study of real numbers, sequences, continuity, differentiation, and integration.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 40,
        code: "MATH304",
        name: "Mathematical Modeling",
        department: "Mathematics",
        description:
            "Uses mathematical techniques to construct and analyze models of real-world phenomena.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 41,
        code: "PHYS102",
        name: "General Physics II",
        department: "Physics",
        description:
            "Covers electricity, magnetism, waves, optics, and introductory modern physics.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 42,
        code: "PHYS201",
        name: "Classical Mechanics",
        department: "Physics",
        description:
            "Studies advanced mechanics including motion, forces, energy, momentum, and rotational systems.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 43,
        code: "PHYS202",
        name: "Electromagnetism",
        department: "Physics",
        description:
            "Explores electric and magnetic fields, circuits, electromagnetic induction, and Maxwell equations.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 44,
        code: "PHYS203",
        name: "Thermodynamics",
        department: "Physics",
        description:
            "Examines temperature, heat, entropy, energy transfer, and thermodynamic systems.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 45,
        code: "PHYS204",
        name: "Modern Physics",
        department: "Physics",
        description:
            "Introduces relativity, quantum mechanics, atomic physics, and nuclear physics.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 46,
        code: "CHEM102",
        name: "General Chemistry II",
        department: "Chemistry",
        description:
            "Continues the study of chemical equilibrium, kinetics, thermodynamics, acids, and bases.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 47,
        code: "CHEM201",
        name: "Organic Chemistry I",
        department: "Chemistry",
        description:
            "Introduces organic compounds, molecular structures, reactions, and synthesis.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 48,
        code: "CHEM202",
        name: "Organic Chemistry II",
        department: "Chemistry",
        description:
            "Studies advanced organic reactions, mechanisms, spectroscopy, and synthesis strategies.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 49,
        code: "CHEM203",
        name: "Analytical Chemistry",
        department: "Chemistry",
        description:
            "Covers quantitative chemical analysis, instrumentation, measurement, and laboratory techniques.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 50,
        code: "CHEM204",
        name: "Biochemistry",
        department: "Chemistry",
        description:
            "Examines the chemical processes and molecules involved in living organisms.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 51,
        code: "BIO102",
        name: "General Biology II",
        department: "Biology",
        description:
            "Explores ecology, evolution, biodiversity, physiology, and organismal biology.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 52,
        code: "BIO201",
        name: "Genetics",
        department: "Biology",
        description:
            "Studies inheritance, DNA, gene expression, mutations, and modern genetic technologies.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 53,
        code: "BIO202",
        name: "Microbiology",
        department: "Biology",
        description:
            "Examines microorganisms including bacteria, viruses, fungi, and their biological importance.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 54,
        code: "BIO203",
        name: "Ecology",
        department: "Biology",
        description:
            "Studies ecosystems, populations, communities, biodiversity, and environmental relationships.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 55,
        code: "BIO204",
        name: "Human Anatomy and Physiology",
        department: "Biology",
        description:
            "Examines the structure and function of major systems within the human body.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 56,
        code: "ENG102",
        name: "Academic Writing",
        department: "English",
        description:
            "Develops research, argumentation, citation, and advanced academic writing skills.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 57,
        code: "ENG201",
        name: "World Literature",
        department: "English",
        description:
            "Explores significant literary works from various cultures and historical periods.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 58,
        code: "ENG202",
        name: "Creative Writing",
        department: "English",
        description:
            "Introduces techniques for writing fiction, poetry, essays, and other creative works.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 59,
        code: "ENG203",
        name: "Technical Writing",
        department: "English",
        description:
            "Develops professional writing skills for technical reports, documentation, and workplace communication.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 60,
        code: "ENG204",
        name: "Public Speaking",
        department: "English",
        description:
            "Develops oral communication, presentation, persuasion, and public speaking skills.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 61,
        code: "HIST201",
        name: "Asian History",
        department: "History",
        description:
            "Explores major political, cultural, and economic developments throughout Asian history.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 62,
        code: "HIST202",
        name: "European History",
        department: "History",
        description:
            "Examines significant events and transformations in European civilization.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 63,
        code: "HIST203",
        name: "Philippine History",
        department: "History",
        description:
            "Studies major events, personalities, and developments in Philippine history.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 64,
        code: "HIST204",
        name: "Modern World History",
        department: "History",
        description:
            "Examines political, social, technological, and cultural changes in the modern world.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 65,
        code: "HIST205",
        name: "History of Technology",
        department: "History",
        description:
            "Examines technological developments and their influence on societies and civilizations.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 66,
        code: "PSY201",
        name: "Developmental Psychology",
        department: "Psychology",
        description:
            "Studies cognitive, emotional, and social development throughout the human lifespan.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 67,
        code: "PSY202",
        name: "Social Psychology",
        department: "Psychology",
        description:
            "Examines how individuals think, behave, and interact within social environments.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 68,
        code: "PSY203",
        name: "Cognitive Psychology",
        department: "Psychology",
        description:
            "Explores memory, perception, attention, language, reasoning, and decision-making.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 69,
        code: "PSY204",
        name: "Abnormal Psychology",
        department: "Psychology",
        description:
            "Studies psychological disorders, diagnostic approaches, causes, and treatment methods.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 70,
        code: "PSY205",
        name: "Industrial Psychology",
        department: "Psychology",
        description:
            "Applies psychological principles to workplace behavior, organizations, and employee performance.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 71,
        code: "BUS101",
        name: "Introduction to Business",
        department: "Business",
        description:
            "Introduces business organization, management, marketing, finance, and entrepreneurship.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 72,
        code: "BUS201",
        name: "Principles of Management",
        department: "Business",
        description:
            "Examines planning, leadership, organization, decision-making, and management strategies.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 73,
        code: "BUS202",
        name: "Marketing Management",
        department: "Business",
        description:
            "Explores marketing strategies, consumer behavior, branding, pricing, and promotion.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 74,
        code: "BUS203",
        name: "Entrepreneurship",
        department: "Business",
        description:
            "Introduces business planning, innovation, startup development, and entrepreneurial management.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 75,
        code: "BUS204",
        name: "Business Ethics",
        department: "Business",
        description:
            "Examines ethical issues, corporate responsibility, governance, and professional decision-making.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 76,
        code: "ACC101",
        name: "Financial Accounting",
        department: "Accounting",
        description:
            "Introduces accounting principles, financial statements, journals, ledgers, and business transactions.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 77,
        code: "ACC201",
        name: "Managerial Accounting",
        department: "Accounting",
        description:
            "Examines accounting information used for management planning, control, and decision-making.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 78,
        code: "ACC202",
        name: "Intermediate Accounting",
        department: "Accounting",
        description:
            "Studies advanced accounting principles, assets, liabilities, equity, and financial reporting.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 79,
        code: "ACC203",
        name: "Auditing Principles",
        department: "Accounting",
        description:
            "Introduces auditing standards, internal controls, audit procedures, and professional responsibilities.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 80,
        code: "ACC204",
        name: "Taxation",
        department: "Accounting",
        description:
            "Examines fundamental taxation concepts, tax computation, compliance, and business taxation.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 81,
        code: "ECON201",
        name: "Microeconomics",
        department: "Economics",
        description:
            "Studies consumer behavior, firms, markets, pricing, competition, and resource allocation.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 82,
        code: "ECON202",
        name: "Macroeconomics",
        department: "Economics",
        description:
            "Examines economic growth, inflation, unemployment, monetary policy, and fiscal policy.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 83,
        code: "ECON203",
        name: "International Economics",
        department: "Economics",
        description:
            "Explores international trade, exchange rates, globalization, and global financial systems.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 84,
        code: "ECON204",
        name: "Development Economics",
        department: "Economics",
        description:
            "Examines economic growth, poverty, inequality, development policies, and emerging economies.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 85,
        code: "ECON205",
        name: "Econometrics",
        department: "Economics",
        description:
            "Applies statistical methods to economic data for modeling, estimation, and forecasting.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 86,
        code: "IT101",
        name: "Information Technology Fundamentals",
        department: "Information Technology",
        description:
            "Introduces computer systems, software, networks, databases, and information technology concepts.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 87,
        code: "IT201",
        name: "System Administration",
        department: "Information Technology",
        description:
            "Covers server configuration, user management, operating systems, security, and system maintenance.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 88,
        code: "IT202",
        name: "Network Administration",
        department: "Information Technology",
        description:
            "Explores network configuration, routing, switching, monitoring, and troubleshooting.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 89,
        code: "IT203",
        name: "Information Security",
        department: "Information Technology",
        description:
            "Examines cybersecurity threats, risk management, access control, and information protection.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 90,
        code: "IT204",
        name: "IT Project Management",
        department: "Information Technology",
        description:
            "Introduces project planning, scheduling, resource management, risk analysis, and agile practices.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 91,
        code: "GIS101",
        name: "Introduction to Geographic Information Systems",
        department: "Geographic Information Systems",
        description:
            "Introduces spatial data, digital maps, geographic analysis, and GIS technologies.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 92,
        code: "GIS201",
        name: "Spatial Analysis",
        department: "Geographic Information Systems",
        description:
            "Explores spatial relationships, proximity analysis, overlays, interpolation, and geographic modeling.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 93,
        code: "GIS202",
        name: "Web GIS Development",
        department: "Geographic Information Systems",
        description:
            "Covers development of interactive web mapping applications and browser-based spatial visualization.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 94,
        code: "GIS203",
        name: "Remote Sensing",
        department: "Geographic Information Systems",
        description:
            "Introduces satellite imagery, image classification, spectral analysis, and Earth observation.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 95,
        code: "GIS204",
        name: "Spatial Databases",
        department: "Geographic Information Systems",
        description:
            "Studies spatial database design, geographic data storage, indexing, and spatial queries.",
        createdAt: new Date().toISOString(),
    },

    {
        id: 96,
        code: "PHIL101",
        name: "Introduction to Philosophy",
        department: "Philosophy",
        description:
            "Introduces major philosophical questions involving knowledge, reality, morality, and human existence.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 97,
        code: "PHIL201",
        name: "Ethics",
        department: "Philosophy",
        description:
            "Examines ethical theories, moral reasoning, personal responsibility, and contemporary ethical issues.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 98,
        code: "POL101",
        name: "Introduction to Political Science",
        department: "Political Science",
        description:
            "Introduces political institutions, governments, political behavior, ideologies, and public policy.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 99,
        code: "ENV101",
        name: "Environmental Science",
        department: "Environmental Science",
        description:
            "Examines ecosystems, natural resources, pollution, climate change, and environmental sustainability.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 100,
        code: "RES101",
        name: "Research Methods",
        department: "Research",
        description:
            "Introduces research design, data collection, analysis, academic sources, and research reporting.",
        createdAt: new Date().toISOString(),
    },
];