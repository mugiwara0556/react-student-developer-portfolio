
classDiagram
    class App {
        +render()
    }

    class Navbar {
        +displayNavigation()
    }

    class Hero {
        +displayIntroduction()
    }

    class About {
        +displayBiography()
    }

    class Skills {
        +displaySkills()
    }

    class Projects {
        +filterProjects()
        +openProjectDetails()
        +closeProjectDetails()
    }

    class Project {
        +String id
        +String title
        +String category
        +String description
        +String[] technologies
        +String image
        +String link
    }

    class Skill {
        +String id
        +String name
        +String category
        +String level
    }

    class ContactMessage {
        +String name
        +String email
        +String message
    }

    class Contact {
        +validateForm()
        +submitMessage()
    }

    class Footer {
        +displayFooter()
    }

    App --> Navbar
    App --> Hero
    App --> About
    App --> Skills
    App --> Projects
    App --> Contact
    App --> Footer
    Projects o-- "many" Project : displays
    Skills o-- "many" Skill : displays
    Contact ..> ContactMessage : collects
