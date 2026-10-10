# Portfolio Models Documentation

## Overview

This document describes the initial data models and UML class diagram for the Student Developer Portfolio built with React and Tailwind CSS.

## 1. Project Model

**File:** `src/models/Project.js`

Represents a portfolio project.

- `id`: Unique project identifier.
- `title`: Project name.
- `category`: Project classification.
- `description`: Project summary.
- `technologies`: Array of technologies used.
- `image`: Optional project image path.
- `link`: Optional project URL.

## 2. Skill Model

**File:** `src/models/Skill.js`

Represents a technical or professional skill.

- `id`: Unique skill identifier.
- `name`: Skill name.
- `category`: Skill classification.
- `level`: Skill proficiency level.

## 3. ContactMessage Model

**File:** `src/models/ContactMessage.js`

Represents the information entered in the contact form.

- `name`: Sender's name.
- `email`: Sender's email address.
- `message`: Message content.
- `isValid()`: Checks that the fields are not empty and the email format is valid.

## 4. UML Class Diagram

The class diagram is available in `docs/class-diagram.md`. It shows the relationships between the main portfolio components and the three models.

## 5. Implementation Notes

The Project and Skill models are used by their respective React components. The ContactMessage model is used to validate contact form input.

The contact form currently demonstrates client-side validation only. It does not send messages to a server or store them in a database.
