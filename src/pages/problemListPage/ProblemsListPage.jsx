
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { useGetTopicsQuery } from "../../services/questionApi";
import "./problemListPage.scss";

const ProblemsListPage = () => {
     const { data = [], isLoading } = useGetTopicsQuery();

     return (
          <section className="problems-list-page">
               <div className="problems-list__head">
                    <h1 className="text-[1.4em]">
                         Savollar <Loader show={isLoading} />
                    </h1>
                    <div className="flex gap-[8px] text-[#ccc]">
                         {
                              data.map(question => (
                                   <div key={question.id} className="problem-category-item">
                                        <Link to={`/${question.name}`}>{question.name}</Link>
                                   </div>
                              ))
                         }
                    </div>
               </div>
          </section>
     )
}

export default ProblemsListPage