"use strict";
// Can mark a class abstract in order to get abstract members  
// Objective of abstract class is to be inherited and let the child provide implementation for these members
class Command {
    execute() {
        console.log("Executing: ", this.commandLine());
    }
}
class GitResetCommand extends Command {
    commandLine() {
        return 'git reset --hard';
    }
}
class GitFetchCommand extends Command {
    commandLine() {
        return 'git fetch --all';
    }
}
new GitResetCommand().execute();
new GitFetchCommand().execute();
// new Command(); --> Error: cannot create an instance of an abstract class
