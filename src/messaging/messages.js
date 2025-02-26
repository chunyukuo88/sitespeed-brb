import chalk from 'chalk';
import boxen from 'boxen';

const art = `
 ____  _ _                                _   ____       _     
/ ___|(_) |_ ___  ___ _ __   ___  ___  __| | | __ ) _ __| |__  
\\___ \\| | __/ _ \\/ __| '_ \\ / _ \\/ _ \\/ _\` | |  _ \\| '__| '_ \\ 
 ___) | | ||  __/\\__ \\ |_) |  __/  __/ (_| | | |_) | |  | |_) |
|____/|_|\\__\\___||___/ .__/ \\___|\\___|\\__,_| |____/|_|  |_.__/ 
                     |_|                                       
`;

const messages = {
  initialGreeting: boxen(chalk.green(art), { padding: 1 }),
};

export default messages;
