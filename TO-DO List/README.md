# To-Do List Application

## Overview

The To-Do List application is a web-based tool that allows users to manage their tasks efficiently. Built with ReactJS, it utilizes Context API for state management and LocalStorage for persistent data storage, ensuring tasks remain available across sessions.

## Features

- **Add Tasks**: Users can input new tasks and add them to their list.
- **Delete Tasks**: Easily remove tasks from the list when they are no longer needed.
- **Mark as Complete**: Users can check off tasks that have been completed.
- **Persistent Storage**: Tasks are saved in LocalStorage, allowing users to access them even after refreshing the page.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling for the layout and user interface.
- **ReactJS**: Front-end framework for building the user interface.
- **Context API**: For managing state across components.
- **LocalStorage**: To store tasks persistently in the browser.

## Getting Started

To run the To-Do List application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open your browser and navigate to http://localhost:3000 to view the application

## Usage

This section outlines how to use the To-Do List application effectively:

1. **Add a Task**:

   - Enter a task in the input field provided.
   - Click the **"Add Task"** button to add it to your list.

2. **Manage Tasks**:

   - Check off tasks as you complete them to mark them as done.
   - Click the **"Delete"** button to remove any task from the list.

3. **Data Persistence**:
   - Your tasks will be saved automatically in the browser's LocalStorage, ensuring they remain accessible even if you refresh the page.

## Future Enhancements

Here are some potential improvements to enhance the To-Do List application further:

- **Task Prioritization**: Implement features that allow users to set priorities for tasks.
- **Deadlines**: Add functionality to assign deadlines to tasks, helping users manage their time more effectively.
- **Improved UI/UX**: Enhance the user interface and experience with better styling and animations.
- **Filtering Options**: Introduce a filtering system to view completed or pending tasks easily.
