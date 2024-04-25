import NoImg from "../../assets/images/no-image-icon-md.png";
import Button from "../layout/Button";

function AboutMeHome() {
  return (
    <section className="w-100 aboutMeHome">
      <div className="container mx-auto">
        <div className="w-4/5 mx-auto flex flex-col md:flex-row py-28 gap-5">
          <article className="aboutMeHomeImgContainer flex justify-center items-center md:w-2/4 mx-auto">
            <img src={NoImg} alt="Coach Img" />
          </article>
          <article className="md:w-2/4 mx-auto">
            <h3 className="text-4xl text-center pb-10">Lorem Ipsum</h3>
            <h5 className="text-2xl text-center pb-10">EXECUTIVE COACH</h5>
            <p className="border-b-2 border-gray-500"></p>
            <p className="pt-5 text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              eos voluptates eveniet possimus, ducimus sint pariatur dicta optio
              debitis ipsa doloribus, dolor eligendi dolores. Delectus
              perferendis dolorem consequuntur eum non eos natus esse explicabo
              in, atque sint minima consequatur iure!
            </p>
            <div className="text-center mt-16">
              <Button to="/about" text="Read More" bgColor="slate" textColor="gray" addClass="mx-auto"/>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutMeHome