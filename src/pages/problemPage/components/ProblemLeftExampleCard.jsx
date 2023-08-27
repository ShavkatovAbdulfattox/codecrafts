/* eslint-disable react/prop-types */

const ProblemLeftExampleCard = ({ example, index, isQueryPage }) => {
  return (
    <div key={index} className="left-problem_example-container">
      <b>Namuna {++index}: </b>
      <div className="left-problem_example-card" data-query={isQueryPage}>
        <pre>
          <b>Kiritish:</b> &nbsp;
          {isQueryPage && <br />}
          <span>{example.input}</span>
          {isQueryPage && <br />}
        </pre>
        <pre>
          <b>Natija:</b> &nbsp;
          {isQueryPage && <br />}
          <span>{example.output}</span>
          {isQueryPage && <br />}
        </pre>
        <pre>
          <b>Tushuntirish:</b> &nbsp;
          <span>{example.explanation}</span>
        </pre>
      </div>
    </div>
  );
};

export default ProblemLeftExampleCard;
