# node_oc



node server to tes openshift jenkins deploy


## Now the configurations in .npmrc and package.json allow to publish into localhost:8081 nexus repository.

## Running the command: 

## $ npm publish 

## or

## $ npm publish --registry http://localhost:8081/nexus/content/repositories/npm/

## To publish the package to specific registry pointing to nexus

## And

## $ npm install to install all dependencies needed in package.json

# trubleshooting :

## if when you are running the "$ npm insttall" command something fails becouse a dependency is needed then you must 
## to publish that dependency into nexus repository.

REFS:

https://blog.sonatype.com/using-nexus-3-as-your-repository-part-2-npm-packages
