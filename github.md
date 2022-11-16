# GITHUB AND COLLABORATION
Remember that it's incredibly helpful to make all of your commits on descriptively named topic branches. 
The way we can interact and control a remote repository is through the Git remote command:


*$ git remote*
The output of git remote is just the word origin.

*git remote -v* will print out the entire path of the remote repository. 


This command below connects an existing repository to a remote repository. 

*git remote add origin <URL>*

You can merge and send a branch or several branches to the remote repo. 


## SENDING COMMITS TO THE REMOTE REPOSITORY
To send local commits to a remote repository you need to use the git push command

*$ git push <remote-shortname> <branch>*

*$ git push origin master*


## PULLING COMMITS FROM THE REMOTE REPOSITORY
*$ git pull origin master*

### git fetch
Git fetch is used to retrieve commits from a remote repository's branch but it does not automatically merge the local branch with the remote tracking branch after those commits have been received.
The git fetch command is just the first step. It just retrieves the commits and moves the tracking branch. It does not merge the local branch with the tracking branch.

*$ git fetch origin master*


## REVIEWING EXISTING WORK
When working with other developers, one very important command is *git log*

Filtering collaborator's commits

Group commit by Author
A quick way that we can see how many commits each contributor has added to the repository is to use the git shortlog command:
*$ git shortlog*

git shortlog displays an alphabetical list of names and the commit messages that go along with them. If we just want to see just the number of commits that each developer has made, we can add a couple of flags: -s to show just the number of commits (rather than each commit's message) and -n to sort them numerically (rather than alphabetically by author name).

*$ git shortlog -s -n*


### Filter By Author

*git log --author="Leonard Odoi"*

If you run a git log with the author flag and there are 2 authors with the same name, it will show commits by both authors. If the name is a first name and a last name, it is very important to put them in double quotes. 


### Filter Commits By Search
We can filter commits with the --grep flag.

*$ git log --grep=bug*
*$ git log --grep bug*


Remember that spacing is an issue, here, too. If you're trying to search for something that is multiple words and has spaces between the words, you need to wrap everything in quotes. For example, to search for unit tests you would need to use the following command, git log --grep="unit tests".

## KNOWING WHAT TO WORK ON IN A PROJECT
Always ensure to check if the project has a CONTRIBUTING.md file. This will give you instructions on how to contribute to the project, how to name your branches and whether a developer is already working on the issue you discovered. 
Best Practices
- Write descriptive commit messages
- Create small focused commits
- Update the README.md file if code makes drastic changes



## PULL REQUESTS
Pull requests are created on GitHub. A pull request is a request to the original or source repository's maintainer to include changes in their project that you made in your fork of their project. Follow these steps: 
- reviewing the project's CONTRIBUTING.md file
- checking out the project's existing issues
- talking with the project maintainer
- you must fork the source repository
- clone your fork down to your machine
- make some commits (ideally on a topic branch!)
- push the commits back to your fork
- create a new pull request and choose the branch that has your new commits


Stars & Watching

If you want to keep up-to-date with the Repository, GitHub offers a convenient way to keep track of repositories - it lets you star repositories.
If you want to be updated on every change, you watch the repo. 


Including Upstream Changes

Changes may occur in the upstream repository that does not exist in your forked repository. You must keep the upstream repo in sync with the forked repo if you are going to be working with that repo. In this case, you must add a new remote to your local

*$ git remote add upstream <url of upstream>.git*

upstream is the de facto name. 

### You can reset remote names

*$ git remote rename mine origin*
*$ git remote rename source-repo upstream*



### Retrieving Upstream Changes

Now to get the changes from upstream remote repository, all we have to do is run a git fetch and use the upstream shortname rather than the origin shortname:


*$ git fetch upstream master*

When you add a connection to the new upstream remote repository, if you run git fetch upstream master it will not update your forked repository on GitHub. 
You will have to push the new commits to your fork to get these changes in your forked repository. 

To get changes into your forked version of the upstream project, you could merge upstream/master into an existing branch (like the local master branch) and push that.
First run:
*git fetch upstream master*

# to make sure I'm on the correct branch for merging
*$ git checkout master*

# merge in upstream's changes
*$ git merge upstream/master*

# send upstream's changes to *my* remote forked repo
*$ git push origin master*



# Recap

When working with a project that you've forked. The original project's maintainer will continue adding changes to their project. You'll want to keep your fork of their project in sync with theirs so that you can include any changes they make.

To get commits from a source repository into your forked repository on GitHub you need to:

- get the cloneable URL of the source repository
- create a new remote with the git remote add command
	- use the shortname upstream to point to the source repository
	- provide the URL of the source repository
- fetch the new upstream remote
- merge the upstream's branch into a local branch
- push the newly updated local branch to your origin repo


### Squashing Commits

$ git rebase -i HEAD~3



### The Rebase Command

The git rebase command will move commits to have a new base. In the command git rebase -i HEAD~3, we're telling Git to use HEAD~3 as the base where all of the other commits (HEAD~2, HEAD~1, and HEAD) will connect to.

The -i in the command stands for "interactive". You can perform a rebase in a non-interactive mode. While you're learning how to rebase, though, I definitely recommend that you do interactive rebasing.

You can also create a backup before you rebase, by creating a new branch, where the HEAD is pointed to. You can name it backup. 


## Ancestry References



## Rebase Commands

Let's take another look at the different commands that you can do with git rebase:

- use p or pick – to keep the commit as is
- use r or reword – to keep the commit's content but alter the commit message
- use e or edit – to keep the commit's content but stop before committing so that you can:
	- add new content or files
	- remove content or files
	- alter the content that was going to be committed
- use s or squash – to combine this commit's changes into the previous commit (the commit above it in the list)
- use f or fixup – to combine this commit's change into the previous one but drop the commit message
- use x or exec – to run a shell command
- use d or drop – to delete the commit

## Force Push
After rebasing, you cannot just push to origin. You must force push, with the command:
git push -f origin <branch_name>

However, if you are working in a collaborative environment, be careful about doing this because the other developers will have to sync their repo and this might sometimes mean restarting their work all over. 