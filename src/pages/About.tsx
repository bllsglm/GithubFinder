
const About = () => {
  return (
    <div>
     <h1 className="text-6xl mb-4">Github Finder</h1>
     <p>
        GitHub Finder is a simple web application built with React that allows you to search for GitHub users and view their profiles. It utilizes the GitHub API to fetch user information and display it in a user-friendly interface.
      </p>
      <p>
        This app is created for learning purposes to demonstrate how to build a React application that interacts with an external API. It showcases key React concepts such as state management, component lifecycle, and routing.
      </p>
      <br />
      <h2>Features</h2>
      <ul style={{listStyle:'inside'}}>
        <li>Search for GitHub users by their username</li>
        <li>View detailed user profiles including their repositories, followers, and following</li>
        <li>Responsive and easy-to-use interface</li>
      </ul>
      <br />
      <hr />
      <br />
      <h2>Technologies Used</h2>
      <p>
        GitHub Finder is built using the following technologies:
      </p>
      <ul style={{listStyle: 'inside'}}>
        <li>React</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>Tailwindcss</li>
        <li>React Router for navigation</li>
        <li>GitHub API for user data</li>
      </ul>
      <br/>
      <hr />
      <br />
      <h2>Get in Touch</h2>
      <p>
        If you have any questions or feedback, feel free to reach out to us on GitHub or through our contact form.
      </p>
    </div>
  )
}

export default About