import Bar from "../components/Bar";
import { languages } from "../data";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education and experience */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">
              Oregon State University (2021 - 2023)
            </p>
            <p className="my-3">
              I am currently pursuing a BS in Computer Science at Oregon State
              University
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Open To Network</h5>
            <p className="font-semibold"></p>
            <p className="my-3">
              I am currently seeking an internship or full time position as a
              web developer
            </p>
          </div>
        </div>
      </div>

      {/* Languages & tools */}
      <div className="flex md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages / Frameworks / Tools</h5>
          <div className="my-2 ">
            {languages.map(language => (
              <Bar data={language} key={`${language.name}`} />
            ))}
          </div>
        </div>
      </div>
      </div>
  );
};

export default resume;
