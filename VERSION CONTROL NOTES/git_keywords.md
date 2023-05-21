# Key Terms
**Version Control System (VCS) or Source Code Manager (SCM):** A VCS allows you to:
revert files back to a previous state, revert the entire project back to a previous state, review changes made over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more.

**Commit (snapshot):** Git thinks of its data like a set of snapshots of a mini file system.
Every time you commit, or save the state of your project in Git, it basically takes a
picture of what all your files look like at that moment and stores a reference to that
snapshot.

**Repository (repo):** A directory that contains your project work, as well as a few files (hidden by default in Mac OS X) which are used to communicate with Git. Repositories can exist either locally on your computer or as a remote copy on another computer.

**Working Directory:** The files that you see in your computer's file system. When you open your project files up on a code editor, you're working with files in the Working

**Directory**
This is in contrast to the files that have been saved (in commits!) in the repository. When working with Git, the Working Directory is also different from the command line's concept of the current working directory which is the directory that your shell is
"looking at" right now.
1 OF 3

## GIT COURSE
**Checkout:** When content in the repository has been copied to the Working Directory. It is possible to checkout many things from a repository; a file, a commit, a branch, etc.

**Staging Area or Staging Index or Index:** A file in the Git directory that stores
information about what will go into your next commit. You can think of the staging area as a prep table where Git will take the next commit. Files on the Staging Index are poised to be added to the repository.

**SHA:** A SHA is basically an ID number for each commit. It is a 40-character string
composed of characters (0–9 and a–f) and calculated based on the contents of a file or directory structure in Git. "SHA" is shorthand for "SHA hash". A SHA might look like this:
**e2adf8ae3e2e4ed40add75cc44cf9d0a869afeb6**

**Branch:** A branch is when a new line of development is created that diverges from the main line of development. This alternative line of development can continue without altering the main line.

Going back to the example of save point in a game, you can think of a branch as where
you make a save point in your game and then decide to try out a risky move in the
game. If the risky move doesn't pan out, then you can just go back to the save point. The key thing that makes branches incredibly powerful is that you can make save points on one branch, and then switch to a different branch and make save points there, too.