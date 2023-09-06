# Finca del café frontend 

In this readme you know all information related with Finca del café frontend.

# <a name="Run-the-project-in-local-environment">Run :bicyclist: the project in local environment</a>   

- Run the following command to start the microservice in developer mode :computer:

```shell
npm run dev
```

# <a name="Project-structure">Project structure :file_folder:</a>  

```sh
finca-cafe-front/
/src
|-- /components
|   |-- /atoms
|   |   |-- Button.js
|   |   |-- Input.js
|   |-- /molecules
|   |   |-- FormField.js
|   |-- /organisms
|   |   |-- Header.js
|   |   |-- Footer.js
|-- /containers
|   |-- HomePage.js
|   |-- AboutPage.js
|-- /services
|   |-- ApiService.js
|-- /utils
|   |-- validation.js
|-- /constants
|   |-- apiEndpoints.js
|-- /hooks
|   |-- useLocalStorage.js
|-- /context
|   |-- AuthContext.js
|-- /routes
|   |-- AppRouter.js
|-- /styles
|   |-- variables.css
|   |-- global.css
|-- App.js
|-- index.js
```

Here's a brief description of each folder:

/components: This is where your application's components are located. Following the principle of Atomic Design, they are divided into "atoms," "molecules," and "organisms," representing the hierarchy of component complexity.

/containers: Components that serve as containers for entire pages or sections of your application.

/services: Here you can place services responsible for business logic, such as communication with the API.

/utils: Utilities and helper functions that can be reused throughout the application.

/constants: Constants, such as API routes or values used in multiple places.

/hooks: Custom React hooks that you can use in your components to share logic.

/context: React contexts for managing the global state of the application, following the Dependency Inversion principle of SOLID.

/routes: Configuration of application routes, typically using a library like React Router.

/styles: Global CSS style files and design variables.

App.js and index.js: Main files of the React application.

# <a name="Good-practices">Good practices :surfer: :sunglasses:</a> 

Remember that all code you write in this microservice must be in English, including comments.

Do not forget that the description of the commit's must also be in English  and the message must be descriptive with the code that you are going to upload.