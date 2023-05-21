# SHELL NAVIGATION

## Installing Bash on Windows
https://youtu.be/vL3Yy4rtLjE


## File System Organization
Files on a Linux system are arranged in what is called a hierarchical directory structure. 
They are organized in a tree-like pattern of directories. Directories are the same as folders. 
Directories can contain files and subdirectories. 


## PRINT WORKING DIRECTORY
``pwd```
The directory we are standing in is called the working directory. 
To see the name of the working directory, we use the `pwd` command. 

## LIST FILES
```ls```

To list the files in the working directory, we use the `ls` command.
### ls flags


## CHANGE DIRECTORY
```cd```
To change the working directory, we use the `cd` command followed by the path name you want to go to. 

### File Navigation
When you open the terminal, it always starts at the root directory, represented by `/` or `~`
if you type `cd~` or `cd` it takes you to the root directory. 
If we type `cd` followed by nothing, `cd` will change the working directory to our home directory.

#### Absolute Paths
An absolute pathname begins with the root directory and follows the tree branch by branch until the path to the desired directory or file is completed. 
#### Relative Paths
A relative pathname starts from the working directory to its destination

## Special File Names
### Hidden File Names
File names that begin with a period character are hidden. `ls` will not list such files, 
unless we use `ls -a`. Some applications will place their configuration 
and settings files in your home directory as hidden files. 

### Files names are case sensitive
The file names "File1" and "file1" refer to different files. 

### Spaces in File Names
*Do not embed spaces in file names.* If you want to represent spaces between 
words in a file name, use underscore characters. 
Browsers, web servers, and programming languages do not handle spaces consistently. 
For example, if you use spaces in your filename, some systems may treat the filename 
as two filenames. Some servers will replace the areas in your 
filenames with `"%20" `(the character code for spaces in URLs), 
resulting in all your links being broken. It's better to separate 
words with hyphens, rather than underscores: *my-file.html vs. my_file.html.*


The less function

## Copying Files and Folders

