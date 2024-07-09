import Image from "next/image";

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My Portfolio</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>      
        <Image
        src="/profile.jpeg"
        alt="Profile Picture"
        width={200}
        height={200}
        style={{ borderRadius: '50%' }}
      /></div>

      <p>Hello World, My name is Syed Ahmad Shaan, a Front-end developer.</p>
      <p>I specialize in building interactive and responsive web applications using the latest technologies.</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Skills</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>HTML / CSS</li>
          <li>Git / GitHub</li>
        </ul>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Projects</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Student_Management_System" target="_blank">Student Management System</a></li>
          <li><a href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Todo-list-app" target="_blank">ToDo List App</a></li>
          <li><a href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/cli-number-guessing-game" target="_blank">Number Guessing Game</a></li>
          <li><a href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Word-Counter" target="_blank">Word Counter</a></li>
          <li><a href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Currency-Converter" target="_blank">Currency Converter</a></li>
          <li><a href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/ATM" target="_blank">ATM</a></li>
          <li><a href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Simple-Calculator" target="_blank">Simple Calculator</a></li>


        </ul>
      </div>
    </div>
  );
}
