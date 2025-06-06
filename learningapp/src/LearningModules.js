import React, { useState } from "react";

// Dummy data for language contents
const languageContents = {
    c: [
        {
            id: 1,
            title: "Introduction to C",
            content: `C is considered the mother of all programming languages. Developed in the early 1970s by Dennis Ritchie at Bell Labs, C has influenced many modern languages such as C++, Java, and even Python. Its syntax and concepts form the foundation for understanding how computers work at a low level.

Learning C provides a deep understanding of memory management, pointers, and the underlying architecture of operating systems. Many embedded systems, operating systems, and performance-critical applications are still written in C today.

By mastering C, you gain the ability to write efficient code, understand how software interacts with hardware, and build a strong base for learning other programming languages.`
        },
        {
            id: 2,
            title: "Variables in C",
            content: `Variables in C are containers for storing data values. Before using a variable, you must declare its type, which tells the compiler what kind of data it will hold. Common types include int, float, char, and double.

For example:
\`\`\`c
int age = 25;
float salary = 50000.50;
char grade = 'A';
\`\`\`

Variables can be local (declared inside functions) or global (declared outside all functions). Proper variable naming and scope management are crucial for writing readable and maintainable C programs.`
        },
        {
            id: 3,
            title: "Control Structures",
            content: `C provides several control structures to manage the flow of your program:

- **if, else if, else**: Used for conditional execution.
- **switch**: Useful for multi-way branching based on the value of a variable.
- **for, while, do-while**: Looping constructs to repeat a block of code.

Example:
\`\`\`c
for (int i = 0; i < 10; i++) {
    printf("%d\\n", i);
}
\`\`\`

Understanding these structures is essential for implementing logic and algorithms in your C programs.`
        },
        {
            id: 4,
            title: "Functions in C",
            content: `Functions are blocks of code designed to perform specific tasks. They help organize code, promote reusability, and make programs easier to maintain.

A function in C is defined with a return type, a name, and parameters (if any):

\`\`\`c
int add(int a, int b) {
    return a + b;
}
\`\`\`

Functions can return values or be void (no return value). You can also pass arguments by value or by reference (using pointers). Modular programming with functions is a key aspect of writing robust C applications.`
        },
        {
            id: 5,
            title: "Pointers in C",
            content: `Pointers are variables that store the memory address of another variable. They are one of the most powerful and complex features of C.

\`\`\`c
int x = 10;
int *ptr = &x;
\`\`\`

Pointers enable dynamic memory allocation, efficient array handling, and the creation of complex data structures like linked lists and trees. However, improper use of pointers can lead to bugs such as memory leaks and segmentation faults. Mastering pointers is essential for advanced C programming.`
        },
        {
            id: 6,
            title: "Memory Management",
            content: `C allows manual memory management using functions like malloc, calloc, realloc, and free from the stdlib.h library.

\`\`\`c
int *arr = (int*)malloc(10 * sizeof(int));
if (arr == NULL) {
    // Handle allocation failure
}
// Use the array
free(arr); // Release memory
\`\`\`

Proper memory management is critical to avoid leaks and undefined behavior. Unlike higher-level languages, C does not have garbage collection, so developers must explicitly allocate and free memory.`
        },
        {
            id: 7,
            title: "File I/O in C",
            content: `C provides functions for file input and output through the stdio.h library. You can open, read, write, and close files using functions like fopen, fprintf, fscanf, fread, fwrite, and fclose.

Example:
\`\`\`c
FILE *fp = fopen("data.txt", "r");
if (fp != NULL) {
    char buffer[100];
    while (fgets(buffer, sizeof(buffer), fp)) {
        printf("%s", buffer);
    }
    fclose(fp);
}
\`\`\`

File I/O is essential for data persistence, configuration, and communication with other programs.`
        },
    ],
    python: [
        {
            id: 1,
            title: "Introduction to Python",
            content: `Python is an interpreted, high-level, general-purpose programming language created by Guido van Rossum and first released in 1991. Its simple and readable syntax makes it an excellent choice for beginners and professionals alike.

Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It has a vast standard library and a vibrant ecosystem of third-party packages for web development, data science, automation, and more.

Python's philosophy emphasizes code readability and developer productivity, making it one of the most popular languages in the world.`
        },
        {
            id: 2,
            title: "Data Types in Python",
            content: `Python has several built-in data types:

- **int**: Integer numbers (e.g., 42)
- **float**: Floating-point numbers (e.g., 3.14)
- **str**: Strings (e.g., "Hello, World!")
- **bool**: Boolean values (True or False)
- **list**: Ordered, mutable collections (e.g., [1, 2, 3])
- **tuple**: Ordered, immutable collections (e.g., (1, 2, 3))
- **dict**: Key-value pairs (e.g., {'a': 1, 'b': 2})
- **set**: Unordered collections of unique elements (e.g., {1, 2, 3})

Dynamic typing allows variables to change type at runtime, but understanding data types is crucial for writing correct and efficient Python code.`
        },
        {
            id: 3,
            title: "Control Flow",
            content: `Python uses indentation to define code blocks, making control flow visually clear. The main control flow statements are:

- **if, elif, else**: Conditional execution.
- **for**: Iterates over sequences like lists, tuples, or strings.
- **while**: Repeats a block as long as a condition is true.
- **break, continue, pass**: Control loop execution.

Example:
\`\`\`python
for i in range(5):
    if i % 2 == 0:
        print(f"{i} is even")
    else:
        print(f"{i} is odd")
\`\`\`

Mastering control flow is essential for implementing logic and algorithms in Python.`
        },
        {
            id: 4,
            title: "Functions in Python",
            content: `Functions in Python are defined using the \`def\` keyword. They help organize code, promote reuse, and improve readability.

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")
\`\`\`

Functions can have default arguments, variable-length arguments (\`*args\`, \`**kwargs\`), and can return values. Python also supports anonymous functions using the \`lambda\` keyword.

Understanding how to define and use functions is fundamental to writing modular and maintainable Python code.`
        },
        {
            id: 5,
            title: "Modules and Packages",
            content: `Python allows you to organize code into modules (single files) and packages (directories with \`__init__.py\`). This promotes code reuse and maintainability.

You can import standard library modules or third-party packages using the \`import\` statement:

\`\`\`python
from datetime import datetime
\`\`\`

To create your own module, simply save functions and classes in a \`.py\` file and import it in other scripts. Packages enable you to structure large projects into manageable components.`
        },
        {
            id: 6,
            title: "File Handling",
            content: `Python provides built-in functions to read and write files. Use the \`open()\` function to access files in different modes ('r', 'w', 'a', etc.).

\`\`\`python
with open('example.txt', 'r') as file:
    contents = file.read()
    print(contents)
\`\`\`

The \`with\` statement ensures files are properly closed after use. You can read line by line, write new content, or append to existing files. File handling is essential for data persistence and processing.`
        },
        {
            id: 7,
            title: "Error Handling",
            content: `Python uses \`try\`, \`except\`, \`else\`, and \`finally\` blocks for error handling. This allows you to gracefully handle exceptions and prevent program crashes.

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Execution complete.")
\`\`\`

You can raise custom exceptions using the \`raise\` keyword. Robust error handling is vital for building reliable applications.`
        },
        {
            id: 8,
            title: "Object-Oriented Programming",
            content: `Python supports object-oriented programming (OOP) with classes and objects. OOP enables you to model real-world entities, encapsulate data, and promote code reuse through inheritance and polymorphism.

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound.")

class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks.")

dog = Dog("Buddy")
dog.speak()
\`\`\`

Understanding OOP is essential for designing scalable and maintainable Python applications.`
        },
    ],
    java: [
        {
            id: 1,
            title: "Introduction to Java",
            content: `Java is a class-based, object-oriented programming language developed by Sun Microsystems in 1995. It is designed to be platform-independent, allowing code to run on any device with a Java Virtual Machine (JVM).

Java's syntax is similar to C and C++, but it eliminates many of the complexities such as manual memory management. Java is widely used for building enterprise applications, Android apps, web servers, and more.

The language emphasizes portability, security, and robustness, making it a popular choice for large-scale software development.`
        },
        {
            id: 2,
            title: "Classes and Objects",
            content: `In Java, classes are blueprints for creating objects. A class defines the properties (fields) and behaviors (methods) of objects.

\`\`\`java
public class Car {
    String model;
    int year;

    public void drive() {
        System.out.println("Driving...");
    }
}
\`\`\`

Objects are instances of classes. You can create multiple objects from the same class, each with its own state.

\`\`\`java
Car myCar = new Car();
myCar.model = "Toyota";
myCar.year = 2020;
myCar.drive();
\`\`\`

Understanding classes and objects is fundamental to Java programming.`
        },
        {
            id: 3,
            title: "Data Types in Java",
            content: `Java has two categories of data types:

- **Primitive types**: byte, short, int, long, float, double, char, boolean.
- **Reference types**: Objects, arrays, and interfaces.

Example:
\`\`\`java
int age = 30;
double salary = 75000.50;
char grade = 'A';
boolean isActive = true;
String name = "Alice";
\`\`\`

Choosing the right data type is important for memory efficiency and program correctness. Java is statically typed, so variables must be declared with a type before use.`
        },
        {
            id: 4,
            title: "Control Structures",
            content: `Java provides several control structures for managing program flow:

- **if, else if, else**: Conditional execution.
- **switch**: Multi-way branching based on variable values.
- **for, while, do-while**: Looping constructs for repeated execution.

Example:
\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
\`\`\`

Proper use of control structures is essential for implementing logic and algorithms in Java programs.`
        },
        {
            id: 5,
            title: "Methods in Java",
            content: `Methods in Java are blocks of code that perform specific tasks. They are defined inside classes and can return values or be void.

\`\`\`java
public int add(int a, int b) {
    return a + b;
}
\`\`\`

Methods can be overloaded (same name, different parameters) and can have access modifiers (public, private, protected). Using methods promotes code reuse and modularity in Java applications.`
        },
        {
            id: 6,
            title: "Exception Handling",
            content: `Java uses try-catch blocks for exception handling, allowing you to manage runtime errors gracefully.

\`\`\`java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
} finally {
    System.out.println("Execution complete.");
}
\`\`\`

You can throw exceptions using the \`throw\` keyword and create custom exception classes. Robust exception handling is crucial for building reliable Java applications.`
        },
        {
            id: 7,
            title: "Collections Framework",
            content: `Java provides a rich set of data structures in the Collections Framework, including List, Set, Map, and Queue interfaces, along with their implementations like ArrayList, HashSet, and HashMap.

\`\`\`java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

for (String name : names) {
    System.out.println(name);
}
\`\`\`

Collections make it easy to store, retrieve, and manipulate groups of objects. Understanding the Collections Framework is essential for effective Java programming.`
        },
    ],
};

const quotes = [
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "The beautiful thing about learning is nobody can take it away from you. – B.B. King",
];

function LMS() {
    const [page, setPage] = useState("home");
    const [selectedContent, setSelectedContent] = useState(null);
    const [selectedLang, setSelectedLang] = useState(null);

    // Top navbar for language pages
    const TopNavbar = ({ lang }) => (
        <div style={{
            background: "rgb(218, 208, 244)",
            padding: "10px 20px",
            borderBottom: "1px solid #ddd",
            fontWeight: "bold"
        }}>
            {lang.toUpperCase()} - Contents
        </div>
    );

    // Left navbar
    const LeftNavbar = () => (
        <div style={{
            width: 200,
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            background: "rgb(53, 28, 122)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            paddingTop: 30,
            zIndex: 100,
        }}>
            <button style={navBtnStyle} onClick={() => { setPage("home"); setSelectedContent(null); setSelectedLang(null); }}>Home</button>
            <button style={navBtnStyle} onClick={() => { setPage("c"); setSelectedContent(null); setSelectedLang("c"); }}>C</button>
            <button style={navBtnStyle} onClick={() => { setPage("python"); setSelectedContent(null); setSelectedLang("python"); }}>Python</button>
            <button style={navBtnStyle} onClick={() => { setPage("java"); setSelectedContent(null); setSelectedLang("java"); }}>Java</button>
        </div>
    );

    // Home page
    const Home = () => (
        <div style={{ padding: 40 }}>
            <h1 style={{color:"rgb(53, 28, 122)"}}>Welcome to My Programming Blogs!</h1>
            <p>Explore tutorials and resources for C, Python, and Java.</p>
            <div style={{ marginTop: 30 }}>
                <h3 style={{color:"rgb(53, 28, 122)"}}>Quotes to Inspire You:</h3>
                <ul>
                    {quotes.map((q, i) => <li key={i} style={{ margin: "10px 0" }}>{q}</li>)}
                </ul>
            </div>
        </div>
    );

    // Language content list
    const LanguagePage = ({ lang }) => (
        <div>
            <TopNavbar lang={lang} />
            <div style={{ padding: 30, display: "flex", gap: 20, flexWrap: "wrap" }}>
                {languageContents[lang].map(item => (
                    <div
                        key={item.id}
                        style={contentCardStyle}
                        onClick={() => setSelectedContent(item)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    );

    // Content detail page
    // const ContentDetail = ({ lang, content }) => (
    //     <div>
    //         <TopNavbar lang={lang} />
    //         <div style={{ padding: 40 }}>
    //             <h2 style={{color:"rgb(0, 0, 0)"}}>{content.title}</h2>
    //             <p>{content.content}</p>
    //             <button onClick={() => setSelectedContent(null)} style={backButtonStyle}>Back to {lang} Contents</button>
    //         </div>
    //     </div>
    // );
    // Helper to get next/prev content by id
    const getAdjacentContent = (lang, currentId, direction) => {
        const contents = languageContents[lang];
        const idx = contents.findIndex(item => item.id === currentId);
        if (direction === "next" && idx < contents.length - 1) {
            return contents[idx + 1];
        }
        if (direction === "prev" && idx > 0) {
            return contents[idx - 1];
        }
        return null;
    };

    // Content detail page with navigation
    const ContentDetail = ({ lang, content }) => {
        const prevContent = getAdjacentContent(lang, content.id, "prev");
        const nextContent = getAdjacentContent(lang, content.id, "next");
        return (
            <div>
                <TopNavbar lang={lang} />
                <div style={{ padding: 40 }}>
                    <h2 style={{ color: "rgb(0, 0, 0)" }}>{content.title}</h2>
                    <p>{content.content}</p>
                    <div style={{ display: "flex", gap: 10 }}>
                        
                            {prevContent ? <button
                            onClick={() => prevContent ? setSelectedContent(prevContent) : setSelectedContent(null)}
                            style={backButtonStyle}
                            disabled={!prevContent}
                        >Back</button> : null}
                        
                        {nextContent && (
                            <button
                                onClick={() => setSelectedContent(nextContent)}
                                style={backButtonStyle}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div>
            <LeftNavbar />
            <div style={{ marginLeft: 200, minHeight: "100vh", background: "#fafbfc" }}>
                {page === "home" && <Home />}
                {["c", "python", "java"].includes(page) && !selectedContent && <LanguagePage lang={page} />}
                {selectedContent && <ContentDetail lang={selectedLang} content={selectedContent} />}
            </div>
        </div>
    );
}

// Styles
const navBtnStyle = {
    background: "none",
    border: "none",
    color: "#fff",
    padding: "15px 20px",
    textAlign: "left",
    fontSize: 18,
    cursor: "pointer",
    outline: "none",
    marginBottom: 5,
};

const contentCardStyle = {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: "20px 30px",
    minWidth: 220,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "box-shadow 0.2s",
};

const backButtonStyle = {
    background: "rgb(53, 28, 122)",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 16,
};

export default LMS;