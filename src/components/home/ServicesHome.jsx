import IndividualImg from '../../assets/images/individualsImg.webp';
import GroupsImg from '../../assets/images/groupsImg.webp';
import SmBusinesImg from '../../assets/images/smallBusiness.webp';
import Button from '../layout/Button';

function ServicesHome() {
  return (
    <section className="w-100 serviceHome">
      <div className="container flex mx-auto">
        <div className="w-4/5 mx-auto flex flex-col md:flex-row py-28 gap-8">
          <section className="w-100">
            <article className="aboutMeHomeImgContainer flex justify-center items-center w-100 mx-auto">
              <img src={IndividualImg} alt="Individuals coaching image" />
            </article>
            <article className="mx-auto">
              <h5 className="text-2xl text-center py-10">Individuals</h5>
              <p className="pt-5 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                eos voluptates eveniet possimus, ducimus sint pariatur dicta
                optio debitis ipsa doloribus, dolor eligendi dolores.
              </p>
              <div className="text-center mt-16">
                <Button to="/about" text="Learn More" bgColor="slate" textColor="gray" addClass="mx-auto"/>
              </div>
            </article>
          </section>

          <section className="w-100">
            <article className="aboutMeHomeImgContainer flex justify-center items-center w-100 mx-auto">
              <img src={GroupsImg} alt="Group coaching image"/>
            </article>
            <article className="mx-auto">
              <h5 className="text-2xl text-center py-10">Groups</h5>
              <p className="pt-5 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                eos voluptates eveniet possimus, ducimus sint pariatur dicta
                optio debitis ipsa doloribus, dolor eligendi dolores.
              </p>
              <div className="text-center mt-16">
                <Button to="/about" text="Learn More" bgColor="slate" textColor="gray" addClass="mx-auto"/>
              </div>
            </article>
          </section>

          <section className="w-100">
            <article className="aboutMeHomeImgContainer flex justify-center items-center mx-auto">
              <img src={SmBusinesImg} alt="Small Buisiness coaching image"
              />
            </article>
            <article className="mx-auto">
              <h5 className="text-2xl text-center py-10">Small Business</h5>
              <p className="pt-5 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                eos voluptates eveniet possimus, ducimus sint pariatur dicta
                optio debitis ipsa doloribus, dolor eligendi dolores.
              </p>
              <div className="text-center mt-16">
                <Button to="/about" text="Learn More" bgColor="slate" textColor="gray" addClass="mx-auto"/>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ServicesHome