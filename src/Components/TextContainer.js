import "./TextContainer.css";

const TextContainer = (props) => {
  const styling = {
    color: props.color,
    fontFamily: props.fontFamily,
    fontSize: `${props.size}px`,
  };

  return (
    <div className="text_container">
      <div className="text_area" style={styling}>
        <h4>Add React to a Website</h4>
        <p>
          React has been designed from the for gradual adoption, and you can use
          as little or as much React as you need. Perhaps you only want to add
          some "sprinkles of interactivity" to an exisiting page. React
          coponents are a great way to do that.
        </p>
        <p>
          The majority of websites aren't, and don't need to be, single-page
          apps. With a few lines of code and no build tooling, try React in a
          small part of your website. You can then either gradually expand its
          presence, or keep it contained to a few dynamic widgets.
        </p>
        <h4>Next.js</h4>
        <p>
          Next.js a popular and lightweight framework for static and
          server-rendered applictions built with React. It includes styling and
          routing solution out ot the box, and assumes that you're using Node.js
          as the server environment.
        </p>
        <h4>JSX</h4>
        <p>This funny tag syntax is neither a string nor HTML.</p>
        <p>
          It is called JSX, and it is a syntax extension to JavaScript. We
          recommend using it with React to describe what the UI should look
          like. JSX may remind you of a template language, but it comes with the
          full power of JavaScript.
        </p>
      </div>
    </div>
  );
};
export default TextContainer;
