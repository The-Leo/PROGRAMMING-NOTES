GIT VERSION CONTROL NOTES
## First Time Git Configuration

Before you can start using Git, you need to configure it. 
Run each of the following lines on the command line to make sure everything is set up.


## sets up Git with your name
```git config --global user.name "<Your-Full-Name>"```

## sets up Git with your email
```git config --global user.email "<your-email-address>"```

## makes sure that Git output is colored
```git config --global color.ui auto```

## displays the original state in a conflict
```git config --global merge.conflictstyle diff3```

```git config --list```



## Git & Code Editor
The last step of configuration is to get Git working with your code editor. Below are three of the most popular code editors. If you use a different editor, then do a quick search on Google for "associate X text editor with Git" (replace the X with the name of your code editor).


## Atom Editor Setup*
```git config --global core.editor "atom --wait"```


## Sublime Text Setup
```git config --global core.editor "'/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl' -n -w"```



## VSCode Setup*
```git config --global core.editor "code --wait"```



## CREATING AN EMPTY GIT REPOSITORY
```git init```
When this is done, a .git directory is created that contains: config, description, Hooks, info, objects, refs. 

```git clone <URL>```
This command clones a remote repository. If you want to change the name of the repository in your local system, run
```git clone <URL> <new-name>```

## To get info about repos, run
```git status```
This command, by far, must be run than all the others. 



```git log```
Displays the log of commits made in the repository. 
By default, this command displays:
- the SHA (Secure Hash Algorithm; the random string of numbers)
- the author
- the date
- and the message

```git log --oneline```
This command:
- lists one commit per line
- shows the first 7 characters of the commit's SHA
- shows the commit's message

```git log --stat```
This command:
- displays the file(s) that have been modified
- displays the number of lines that have been added/removed
- displays a summary line with the total number of modified files and lines that have been added/removed


```git log -p```
This command adds the following to the default output:
- displays the files that have been modified
- displays the location of the lines that have been added/removed
- displays the actual changes that have been made

```git log -p -w```
Displays the patch information but will not highlight lines where only white space changes have occurred.

$ git log -p fdf5493

$ git log -p fdf5493

By supplying a SHA, the git log -p command will start at that commit! No need to scroll through everything! Keep in mind that it will also show all of the commits that were made prior to the supplied SHA. 

```git show```
This shows only the most recent commit. 
But is can be combined with many of the other flags such as:
--stat
-p -w
-p
git show --stat SHA



# ADDING COMMITS TO A REPO

```git add <filename>```
```git add .```
This command moves files from the working directory to the staging index. 

```git commit```
opens your IDE to add a commit message
```git commit -m "Message"```
adds message to the commit
**Initial commit** is the de facto commit message for the very first commit


```git diff```
This command can see changes made but not committed yet. 
This command displays:
- the files that have been modified
- the location of the lines that have been added/removed
- the actual changes that have been made

**.gitignore**
All you have to do is list the names of files that you want Git to ignore (not track) and it will ignore them.

# Globbing
- blank lines can be used for spacing
- # - marks line as a comment
- * - matches 0 or more characters
- ? - matches 1 character
- [abc] - matches a, b, _or_ c
- ** - matches nested directories - a/**/z matches
	- a/z
	- a/b/z
	- a/b/c/z


# TAGGING
```git tag -a <name of tag>```

## To view a tag 
```git log --decorate```

## To delete a tag
```git tag -d <tagname>```

## To tag a specific commit
```git tag -a <name of tag> <SHA>```


# BRANCHING
```git branch```
lists out all branches. The active branch will have an asterisk by it. 

```git branch <branch name>```
creates a new branch with branch name. But git does not switch to that branch automatically. 

```git checkout <branch name>```
To switch branch
So this will remove all of the files that are referenced by commits in the first branch. It will replace them with the files that are referenced by the commits in the second branch.

```git log --oneline --decorate```
Shows the active branch and any tag that might exist. 

```git branch notable-leo 42a69f```
this command will create a branch called notable-leo and will have it point to the commit with SHA 42a69f



# DELETING A BRANCH
A branch is used to do development or make a fix to the project that won't affect the project (since the changes are made on a branch). Once you make the change on the branch, you can combine that branch into the master branch (this "combining of branches" is called "merging"
Now after a branch's changes have been merged, you probably won't need the branch anymore.

```git branch -d <branch name>```
deletes the branch. 

# Force deletion
git won't allow you to delete a branch with commits. You will have to force deletion by:
```git branch -D <branch name>```

```git branch -b <branch-name>```
creates a new branch and switches to it.

```git log --oneline --decorate --graph --all```
This command shows all branches and commits in the repository


# MERGING
```git merge <name of branch to merge in>```
When a merge happens, Git will:
- look at the branches that it's going to merge
- look back along the branch's history to find a single commit that both branches have in their commit history
- combine the lines of code that were changed on the separate branches together
- makes a commit to record the merge
- 
- Fast-forward merge – the branch being merged in must be ahead of the checked out branch. The checked out branch's pointer will just be moved forward to point to the same commit as the other branch.
- the regular type of merge
	- two divergent branches are combined
	- a merge commit is created

# Merge Conflict
Remember that a merge conflict occurs when Git isn't sure which line(s) you want to use from the branches that are being merged. you must correct it manually. 


# UNDOING CHANGES
```git commit --amend```
this command modifies the last commit. You can edit files or add files to the project. And instead of just staging and committing, you can run git commit --amend
Which will edit the last commit. This might be needful if the present change you are effecting is not very different from the last commit you made. 

```git revert <SHA>```
This will revert changes you made in a commit. git revert creates its own commit. 



# Relative Commit References
- ^ – indicates the parent commit
- ~ – indicates the first parent commit
Here's how we can refer to previous commits:


- the parent commit – the following indicate the parent commit of the current commit
	- HEAD^
	- HEAD~
	- HEAD~1
- the grandparent commit – the following indicate the grandparent commit of the current commit
	- HEAD^^
	- HEAD~2
- the great-grandparent commit – the following indicate the great-grandparent commit of the current commit
	- HEAD^^^
	- HEAD~3
these are used to git reset


```Shell
$ git reset <reference-to-commit>

```
git reset HEAD~1

It can be used to:

- move the HEAD and current branch pointer to the referenced commit
- erase commits
- move committed changes to the staging index
- unstage uncommitted changes



# Git Reset's Flags

The way that Git determines if it erases, stages previously committed changes, or unstages previously committed changes is by the flag that's used. The flags are:

- --mixed when git reset is run with this flag, files are moved to the working directory
- --soft files are moved to the staging index
- --hard files are moved to the trash can

git reset without any flag 
git reset HEAD~1
Moves files to working directory. Same as git reset --mixed HEAD ~1 
