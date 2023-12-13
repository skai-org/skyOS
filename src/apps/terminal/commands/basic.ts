// Define an interface for your commands
interface Command {
    name: string;
    description: string;
    handler: (args: string[]) => string;
  }
  
  // Define a map of commands to their string representations
  const commands: Record<string, Command> = {
    // Basic commands
    help: {
      name: "help",
      description: "Displays a list of available commands",
      handler: () => {
        let output = "Available commands:\n";
        for (const commandName in commands) {
          output += `- ${commandName}`;
        }
        return output;
      },
    },
    clear: {
      name: "clear",
      description: "Clears the terminal screen",
      handler: () => {
        return ""; // String representing cleared screen
      },
    },
  
    // Custom commands
    greet: {
      name: "greet",
      description: "Greets the user with a message",
      handler: (args: string[]) => {
        const name = args[0] || "world";
        return `Hello, ${name}`;
      },
    },
    echo: {
      name: "echo",
      description: "Prints the given arguments to the terminal",
      handler: (args: string[]) => {
        return args.join(" ");
      },
    },
  };
  