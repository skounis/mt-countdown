# Count Down Drupal module
This module is a wrapper over the [The Final Countdown](http://hilios.github.io/jQuery.countdown/) Javascript library developed by [@hilios](https://github.com/hilios)


### Setup the Local Development env. 
Checkout this repositoy into a folder in your local box. You will endup with a structure similar to what follows: 
```
stavross-air-14:mt-countdown skounis$ pwd
/Users/skounis/Documents/drupal/mt-countdown
stavross-air-14:mt-countdown skounis$ ls -la
total 8
drwxr-xr-x   6 skounis  staff   192 Jan 22  2018 .
drwxr-xr-x   6 skounis  staff   192 Dec 29 10:06 ..
drwxr-xr-x  13 skounis  staff   416 Feb 21 17:17 .git
-rw-r--r--   1 skounis  staff  1874 Jan 22  2018 README.md
drwxr-xr-x   4 skounis  staff   128 Mar  7  2018 modules
drwxr-xr-x   4 skounis  staff   128 Oct  9  2017 themes
stavross-air-14:mt-countdown skounis$ 
```

cd into the `mt-coundown` folder and run the docker related commands described in the following sections.

### Docker
Instructions for a Docker based development workspace. The "Drupal + MySQL" option is recommended.

#### Drupal + MySQL
Base on https://hub.docker.com/_/drupal/

Start the MySQL container

```
docker run --name drupal-mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
```

Start the Drupal container

```
docker run -d --link drupal-mysql:mysql -p 8080:80 -p 8022:22 -v `pwd`/modules:/var/www/html/modules/custom -t drupal:8
```

##### Installation

* DB URL: `some-mysql`
* DB Name: `drupal`
* DB User: `root` / `root`

#### Manage the containers

* List: `docker ps -a`
* Stop: `docker stop {name}`
* Remove: `docker rm {name}`
* SHS: `docker exec -it {name} /bin/bash`

#### Wadmiraal (deprecated)
Based on https://hub.docker.com/r/wadmiraal/drupal/
> Please note that Docker should be already installed in your box. https://www.docker.com/products/docker

Start the container:

1. Web and Shell: `docker run -d -p 8080:80 -p 8022:22 -t wadmiraal/drupal:8`
2. Write code locally: ``docker run -d -p 8080:80  -p 8022:22 -v `pwd`/modules:/var/www/modules/custom -t wadmiraal/drupal:8``

Drupal and Shell access
* http://localhost:8080 (`admin`/`admin`)
* `ssh root@localhost -p8022` with password `root`


#### SSH /Logs
Get SSH Access for the Container
* http://phase2.github.io/devtools/common-tasks/ssh-into-a-container/

Get Access to Apache logs
* https://github.com/blinkreaction/dde/issues/27#issuecomment-97982986

`docker logs {container name} -f`


#### Debug
Add the following lines at the end of the `setting.php`

```
/*
 * Enable debug
 */
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

$config['system.logging']['error_level'] = 'verbose';
```
