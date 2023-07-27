/* eslint-disable react/prop-types */

const ProblemLeftExampleCard = ({ example, index }) => {
     return (
          <div key={index} className='left-problem_example-container'>
               <b>Namuna {++index}: </b>
               <div className='left-problem_example-card'>
                    <div>
                         <b>Kiritish:</b>
                         <span>{example.input}</span>
                    </div>
                    <div>
                         <b>Natija:</b>
                         <span>{example.output}</span>
                    </div>
                    <div>
                         <b>Tushuntirish:</b>
                         <span>{example.explanation}</span>
                    </div>
               </div>
          </div>
     )
}

export default ProblemLeftExampleCard