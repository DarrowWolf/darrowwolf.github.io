import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

function Projects() {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      <main className="flex-grow">
        <Header text="Projects" />
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-8">
            <Card
              imageSrc="/img/card-top.jpg"
              title="Project 1"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
              tags={['C#']}
            />

            <Card
              imageSrc="/img/card-top.jpg"
              title="Project 2"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
              tags={['Python']}
            />

            <Card
              imageSrc="js.png"
              title="Project 3"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
              tags={['JavaScript']}
            />

            <Card
              imageSrc="/img/card-top.jpg"
              title="Project 4"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
              tags={['React']}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
