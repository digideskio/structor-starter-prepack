[![structor compatible](https://img.shields.io/badge/structor%20compatible-v1.0.0-0077dd.svg?style=flat)](http://helmetrex.com)

### Description

Starter project for Structor. There is no UI or CSS frameworks. 

### Documentation

Structor's documentation:

* [Structor's component model representation](https://github.com/ipselon/structor/wiki/Structor's-component-model-representation)
* [Generators metadata overview](https://github.com/ipselon/structor/wiki/Generators-metadata-overview)
* [Structor shortcuts](https://github.com/ipselon/structor/wiki/Structor-shortcuts)
 
### Technologies and libraries
The following libs and technlogies were used:
* ```react```,
* ```react-router```,
* ```redux```, ```react-redux```, ```redux-thunk```
* ```redux-saga```,
* ```express```,
<br/>
<br/>

### Start backend server
If you want to see the app in action please do the following:
* Go to folder where you unpack downloaded package.
* Run command: ```npm install```
* Run command: ```npm run build```
* Run command: ```node ./server.js```
* Go to http://localhost:3000

#### Output Web app files
* ```public/``` - folder where static compiled files are.
* ```public/index.html``` - index file of our Web app. If you have included manually resources into meta file ```.structor/desk/index.html``` don't forget to include them here as well.
* ```public/images/``` ```public/resources/``` - due to rewriting rules in express.js we need to separate resources from index file.
<br/>

### Starting Structor 
If you still didn't start the backend server please do the following: 
* Run command: ```npm install```
* Run command: ```node ./server.js```

Now you can start Structor from command line. To recognise the path of current project's folder Structor has 
to be started in the root directory of current project or started with command argument ```-d``` pointing to project's folder. 
* in project root dir: ```structor```
* in any other dir: ```structor -d <path to project directory>```

Once you have started Structor you will see the project's workspace. Now you can try to combine components with each other, 
or generate new React components from the combination, or add new pages, or whatever you want.

<br/>
<br/>
### Proxy setup
We need to setup proxy because of CORS restriction, it means that Structor runs on 2222 port on localhost, 
and our application may require to request REST service on 3000 port. That is restricted by browser policy.

To omit that Structor has embedded http proxy, which you can setup while you are working in workspace. 
So, if your application will work with REST service running on ```http://localhost:3000/service```, setup proxy to: ```http://localhost:3000``` 
and then application has to use the following pattern for requests ```/service/...```.

Current project already has proxy setup to http://localhost:3000.
But if you want to direct request from components into another REST or HTTP server you can setup new value in Structor menu:
<br/>
<br/>
### Exporting pages with routes
In any moment of work with Structor you can export existing pages into real pages with routes.
This can be done by selecting option "Export project". 

After that you will get a list of generated files of pages' components. And one more additional file for router configuration.
In current project these files will be generated into ```src/routes/``` folder. But, you can change this path in ```.structor/config.json``` file. 

Also you may edit templates for output React components in ```.structor/templates/``` or add your own new with ".tpl" extension.
<br/>
<br/>
### Building and trying a real Web app
Having exported pages and routes you can run webpack's build script:
* ```npm run build```

Then, if everything were built and you didn't stop backend server, just go to http://localhost:3000
<br/>
<br/>
### License
MIT
