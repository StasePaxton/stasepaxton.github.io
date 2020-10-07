import GoodDeedsPhoneTop from '../../public/svg/good_deeds/GoodDeeds_phonetop.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function GoodDeeds() {
  return(
    <>
      <section className="bg-white">
        <div className="container mx-auto pt-10 pb-6">
          <img src="/svg/good_deeds/2x/Asset 2@2x.png" className="mx-auto lg:max-w-lg" />
          <p className="text-4xl text-good-deeds-gray-500 text-center"><span className="font-semibold">Volunteer Mobile App</span> (Student Project)</p>
        </div>
      </section>

      <section className="bg-white pt-8">
        <div className="container mx-auto">
          <GoodDeedsPhoneTop className="mx-auto lg:mx-w-md" />
        </div>
      </section>

      <section className="bg-good-deeds-gray-200 pt-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Volunteering made fun...</p>

          <p className="text-good-deeds-gray-300 py-6">
            Our student design team was tasked with creating a mobile application that encouraged and
            promoted active volunteer activities through the concept of gamification. This concept is built
            anround the concept of "micro-volunteering", a small good deed that takes two minutes out of the volunteer's time,
            but adds to the completion of a larger scale project. An example we were given was documenting the public buildings that had
            an accessible handicap ramp. Someone documenting this can help another push the motions to get more
            ramps where people need them.
          </p>

          <p className="text-good-deeds-gray-300">
            The idea is that volunteer would build up the community around them while building up their virtual cities within the app.
            The brief required we make high fidelity screens and prototypes that showcased this gamification element, and a design system
            for a later team to build upon as the app grows.
          </p>
        </div>
      </section>

      <section className="bg-good-deeds-gray-200 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">This is Jessica, our "Active Volunteer"</p>

          <div className="grid grid-cols-12 grid-rows-6 grid-flow-col gap-5 pt-6">
            <div className="row-span-4 col-span-6">
              <ul className="text-base text-good-deeds-gray-300">
                <li><span className="text-good-deeds-orange-400">*</span> 20 years old</li>
                <li><span className="text-good-deeds-orange-400">*</span> University student</li>
                <li><span className="text-good-deeds-orange-400">*</span> Volunteers regularly</li>
                <li><span className="text-good-deeds-orange-400">*</span> Often fees underutilized</li>
                <li><span className="text-good-deeds-orange-400">*</span> Not enough opportunities within her open time frames between classes and work schedules</li>
              </ul>
            </div>
            <div className="row-span-2 col-span-6 text-xl text-good-deeds-gray-300">
              <span clasName="font-light">&#8220;</span>When I volunteer, <strong className="text-good-deeds-orange-400">I want to see the impact</strong> it has on the community.<span className="font-light">&#8222;</span>
            </div>
            <div className="row-span-6 col-span-5">
              <img src="/img/good-deeds/persona.png" style={{ maxHeight: 20.75 + 'rem' }} />
            </div>
          </div>

          <p className="text-good-deeds-gray-300 pt-12">
            Jessica is a very active individual, and that activity prevents her from volunteering in a larger
            capacity. There are not enough reputable projects she can complete in the time between classes and work.
            We set out to not only create a product that would provide that service to her, but also an interface that woukld make her aware
            of what her time is going towards, to allow her to see the impact in real-time with her virtual city.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Principles to follow</p>
          <p className="text-base text-good-deeds-gray-300 pt-6">These principles were provided to us by our UX handoff. These were the main targets to reach for when we started making decisions. The final solution needed to:</p>

          <div className="flex justify-around pt-6">
            <div className="text-gray-700 text-center px-4 py-2 m-2">
              <p className="text-4xl text-good-deeds-orange-400"><strong>Simplify</strong></p>
              <p className="text-good-deeds-gray-300">Cut through the noise, curate the experience.</p>
            </div>

            <div className="text-gray-700 text-center px-4 py-2 m-2">
              <p className="text-4xl text-good-deeds-orange-400"><strong>Catalyze</strong></p>
              <p className="text-good-deeds-gray-300">Spark an interest and habit.</p>
            </div>

            <div className="text-gray-700 text-center px-4 py-2 m-2">
              <p className="text-4xl text-good-deeds-orange-400"><strong>Retain</strong></p>
              <p className="text-good-deeds-gray-300">Keeps users engaged and coming back for more.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-good-deeds-red-100 py-12">
        <div className="container mx-auto px-2">
          <span className="text-good-deeds-orange-400">
            <FontAwesomeIcon icon={faExclamationCircle} className="align-middle text-5xl lg:mr-5" />
            <strong className="align-middle text-4xl font-extrabold text-good-deeds-orange-400">Challenges in UX...</strong>
          </span>
        </div>

        <div className="container mx-auto pt-6 px-2 lg:px-20">
          <p className="text-base text-good-deeds-gray-300">
            With those initial UX deliverables, we recieved a presentation deck that broke down their major findings in their process.
            The key page of the presentation was the section titled "What Didn't Work". It names off three key areas that users and the
            designers found problems with when the project concluded.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Areas to recognize...</p>

          <div className="py-6">
            <p className="font-light text-3xl text-center text-good-deeds-gray-300">&#8220;<span className="font-semibold text-good-deeds-orange-400">Onboarding</span> tutorial should be accessible at all times.&#8222;</p>
            <p className="text-base text-good-deeds-gray-300 pt-4">The onboarding section proved to be a struggle for us as well as we moved into our own version of testing. Here the UX team states it was because the instructions were not being retained by the users and they needed to call on that information later on in their journey.</p>
          </div>

          <div className="py-6">
            <p className="font-light text-3xl text-center text-good-deeds-gray-300">&#8220;<span className="font-semibold text-good-deeds-orange-400">Copy</span> (particular instructions for activity) should answer the questions how and why and nothing more.&#8222;</p>
            <p className="text-base text-good-deeds-gray-300 pt-4">There were many discrepancies with the chosen copy, as we also realized in our own investigations. The chosen vernacular was hard to decipher, not clear for users to understand, and tripped up the overall experience.</p>
          </div>

          <div className="py-6">
            <p className="font-light text-3xl text-center text-good-deeds-gray-300">&#8220;No tangible <span className="font-semibold text-good-deeds-orange-400">rewards</span> (e.g. progress bar or points) beyond growth of city.&#8222;</p>
            <p className="text-base text-good-deeds-gray-300 pt-4">The lack of rewards was something that we immediately noticed upon dissecting the brief. We did not know what functionality the UX intended for the rewards or any of the gamification elements for that matter. The wireframes were more focused on the functionality of the app overall.</p>
          </div>
        </div>
      </section>

      <section className="bg-good-deeds-green-100 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Gamification as a trend...</p>
          <p className="text-good-deeds-gray-300 pt-6">
            It was difficult to find “competitors” to study in this kind of space. One, because of the intention of the product, “competitors” was just not the right word to describe them. Another reason was that this app was truly unique as no one was trying to do the exact same thing. So for direct “competitors”, we focused on apps that offered to connect volunteers to activities. As for indirect, we chose to study apps that used gamification to form positive habits.
          </p>

          <div className="py-8">
            <img src="/img/good-deeds/PriorityMatrix.png" className="mx-auto lg:max-w-3xl" />
            <p className="font-light text-good-deeds-gray-300 text-xs lg:ml-4">"Priority Matrix" exercise but with Brand Values as the axises</p>
          </div>

          <p className="text-good-deeds-gray-300">
            As we suspected, there was a large gap in the market for an app about community that evoked a playful brand. It was the perfect target space for GoodDeeds to fill.
          </p>
        </div>
      </section>

      <section className="bg-good-deeds-blue-100 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">So, How Do We...</p>
        </div>

        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="text-good-deeds-gray-300">
              <div className="grid grid-rows-2 grid-flow-col gap-5">
                <div className="row-span-2"><strong className="text-8xl text-good-deeds-blue-500">1</strong></div>
                <div className="row-span-2 pt-8"><p>Create an interface that is both engaging and reputable?</p></div>
              </div>
            </div>

            <div className="text-good-deeds-gray-300">
              <div className="grid grid-rows-2 grid-flow-col gap-5">
                <div className="row-span-2"><strong className="text-8xl text-good-deeds-blue-500">2</strong></div>
                <div className="row-span-2 pt-8"><p>Make something easy for users to learn and come back to?</p></div>
              </div>
            </div>

            <div className="text-good-deeds-gray-300">
              <div className="grid grid-rows-2 grid-flow-col gap-5">
                <div className="row-span-2"><strong className="text-8xl text-good-deeds-blue-500">3</strong></div>
                <div className="row-span-2 pt-8"><p>Build UI elements that are enticing, impactful, and instructive?</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Diverging Ideas...</p>
          <p className="text-good-deeds-gray-300 pt-6">
            With a design principle like "simplify", my immediate thought was a light, white interface.
            And it was tough to be divergent with that initial thought in my head. But I attempted to
            expand my thoughs, really trying to capture "light" in different ways. "Light" was something
            that also kept creeping into my mind, with the thought of a "radiant smile"
          </p>
        </div>
      </section>

      <section className="bg-white flex justify-between">
        <div className="text-gray-700 text-center px-4 py-2 m-2" style={{maxWidth: 28 + 'rem' }}>
          <FontAwesomeIcon icon={faTimesCircle} className="text-good-deeds-orange-400 text-8xl mx-auto" />
          <img src="/img/good-deeds/Artboard-1.png" className="py-6 mx-auto" style={{ maxHeight: 18.75 + 'rem' }} />
          <p className="text-good-deeds-orange-400 font-semibold text-4xl">&#8220;Coloring in Red&#8221;</p>
          <ul className="text-base text-left text-good-deeds-gray-300 pt-6">
            <li><span className="text-good-deeds-orange-400">*</span> Goal: Capture that “impact” that Jessica is craving.</li>
            <li><span className="text-good-deeds-orange-400">*</span> "Coloring in your city" was an interesting notion to possibly explore.</li>
            <li><span className="text-good-deeds-orange-400">*</span> However, the interface without the coloring is just blank, and that might be unwelcomed.</li>
          </ul>
        </div>

        <div className="text-gray-700 text-center px-4 py-2 m-2" style={{maxWidth: 28 + 'rem' }}>
          <FontAwesomeIcon icon={faCheckCircle} className="text-good-deeds-green-200 text-8xl mx-auto" />
          <img src="/img/good-deeds/Artboard-2.png" className="py-6 mx-auto" style={{ maxHeight: 18.75 + 'rem' }} />
          <p className="text-good-deeds-orange-400 font-semibold text-4xl">&#8220;Breath of Fresh Air&#8221;</p>
          <ul className="text-base text-left text-good-deeds-gray-300 pt-6">
            <li><span className="text-good-deeds-orange-400">*</span> Goal: capture that feeling of freshness and relief.</li>
            <li><span className="text-good-deeds-orange-400">*</span> Very successful representation of that concept for users and peers.</li>
            <li><span className="text-good-deeds-orange-400">*</span> Color scheme is uniform and very clean.</li>
          </ul>
        </div>

        <div className="text-gray-700 text-center px-4 py-2 m-2" style={{maxWidth: 28 + 'rem' }}>
          <FontAwesomeIcon icon={faTimesCircle} className="text-good-deeds-orange-400 text-8xl mx-auto" />
          <img src="/img/good-deeds/Artboard-3.png" className="py-6 mx-auto" style={{ maxHeight: 18.75 + 'rem' }} />
          <p className="text-good-deeds-orange-400 font-semibold text-4xl">&#8220;Reflective&#8221;</p>
          <ul className="text-base text-left text-good-deeds-gray-300 pt-6">
            <li><span className="text-good-deeds-orange-400">*</span> Goal: Capture the transparency of light on the glass; a good deed is something good to "reflect upon"</li>
            <li><span className="text-good-deeds-orange-400">*</span> Many water associations instead of glass, not the same effect.</li>
            <li><span className="text-good-deeds-orange-400">*</span> Not a cohesive feeling, or at least as strong as the other two examples.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white pb-12">
        <div className="container mx-auto pt-20 px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Converging Ideas...</p>
          <p className="text-good-deeds-gray-300 pt-6">
            I focused mainly on the "Breath of Fresh Air" mood for this particular tile. I expanded on the
            colors and tried to experiment with a monochromatic palette since I personally have never tried
            one before. Here are a few takeaways:
          </p>

          <img src="/img/good-deeds/StyleTile1.5.png" className="pt-6" />

          <div className="grid grid-cols-12 grid-rows-4 grid-flow-col gap-5 pt-8">
            <div className="row-span-2 col-span-2"><FontAwesomeIcon icon={faCheckCircle} className="text-good-deeds-green-200 text-8xl mr-5" /></div>
            <div className="row-span-2 col-span-2"><FontAwesomeIcon icon={faTimesCircle} className="text-good-deeds-orange-400 text-8xl mr-5" /></div>

            <div className="row-span-2 col-span-10">
              <ul className="text-base text-left text-good-deeds-gray-300 pt-4">
                <li><span className="text-good-deeds-orange-400">*</span> The typeface (Righteous) is very unique and fitting.</li>
                <li><span className="text-good-deeds-orange-400">*</span> Teal color is very "fun".</li>
                <li><span className="text-good-deeds-orange-400">*</span> The overall tile clearly conveys the product and brand to viewers.</li>
              </ul>
            </div>

            <div className="row-span-2 col-span-10">
              <ul className="text-base text-left text-good-deeds-gray-300 pt-4">
                <li><span className="text-good-deeds-orange-400">*</span> The monochromatic is not as "punchy" or "impactful" as the red iteration.</li>
                <li><span className="text-good-deeds-orange-400">*</span> The green is not as favorable shade.</li>
                <li><span className="text-good-deeds-orange-400">*</span> Too many associations with environmental work (pigeon-holing).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-good-deeds-red-100 py-12">
        <div className="container mx-auto px-2">
          <span className="text-good-deeds-orange-400">
            <FontAwesomeIcon icon={faExclamationCircle} className="align-middle text-5xl lg:mr-5" />
            <strong className="align-middle text-4xl font-extrabold text-good-deeds-orange-400">Scoping became an issue...</strong>
          </span>
        </div>

        <div className="container mx-auto pt-6 px-2 lg:px-20">
          <p className="text-base text-good-deeds-gray-300">
            As the project progressed, our focuses were excited to dig into the gamification elements.
            And since we were starting from scratch on those features, it felt like a high priority internally.
            But in reality, the features were important to test and the graphics were simply "nice to have" at this stage.
            For myself, I chose to rearrange my priorities; I would focu on the functionality and sacrifice the graphics
            for the time being. This break down helped reorient the project for me.
          </p>
        </div>
      </section>

      <section className="bg-good-deeds-green-100 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">First, focus on Functionality...</p>
          <p className="text-4xl font-extrabold text-good-deeds-blue-500 pt-12">So how did I...</p>
        </div>

        <div className="container mx-auto sm:px-2">
          <div className="grid grid-cols-12 gap-5 py-8">
            <div className="col-span-1 text-8xl font-extrabold text-good-deeds-blue-500">1</div>

            <div className="col-start-2 col-span-6 pt-8">
              <p className="text-2xl font-extrabold text-good-deeds-blue-500">
                Create an interface that is both engaging and reputable?
              </p>

              <ul className="pt-8">
                <li className="mb-6"><span className="text-good-deeds-orange-400">*</span> Primary colors were the main component of this goal. While some users may find them "dull" and not as vibrant or exhilarating to look at, the app is still an accessible tool for all types of users. It needs to have an air of seriousness for people to believe in its legitimacy. In contrast, some of my team took the exhilarating colors for their approaches, and users associated those interfaces with words like "juvenile" and "kid-friendly". In contrast, I took another approach to test the variable changes.</li>
                <li><span className="text-good-deeds-orange-400">*</span> The events pages also needed to be void of distraction, so I took the design back to basics. The cleanliness was to enforce quick access and an in-out user journey. This page was not meant to be studied in great detail.</li>
              </ul>
            </div>

            <div className="col-start-9 col-span-4">
              <img src="/img/good-deeds/Phone1.png" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 py-8">
            <div className="col-span-1 text-8xl font-extrabold text-good-deeds-blue-500">2</div>

            <div className="col-start-2 col-span-6 pt-8">
              <p className="text-2xl font-extrabold text-good-deeds-blue-500">
                Make something easy for users to learn and come back to?
              </p>

              <ul className="pt-8">
                <li><span className="text-good-deeds-orange-400">*</span> As discussed in the UX briefing, the main problem with users learning is the lengthy instructions at the start of the user journey. I attempted to make this process as skimmable as possible, pointing out key phrases and points with extra emphasis. Users were still having trouble retaining all the features of the app, but not so much how to engage with them as alluded to in the UX process.</li>
              </ul>
            </div>

            <div className="col-start-9 col-span-4">
              <img src="/img/good-deeds/Phone2.png" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 py-8">
            <div className="col-span-1 text-8xl font-extrabold text-good-deeds-blue-500">3</div>

            <div className="col-start-2 col-span-6 pt-8">
              <p className="text-2xl font-extrabold text-good-deeds-blue-500">
                Build UI elements that are enticing, impactful and instructive?
              </p>

              <ul className="pt-8">
                <li><span className="text-good-deeds-orange-400">*</span> It was important to have a friendly and approachable interface for this type of product. I focused on rounded edges and floating elements within the UI space. Pop-ups were meant to really sit between the plane and the screen. Icons were meant to be vibrant and large. I also introduced progress bars and a few animations to really enhance the impactfulness of every interaction.</li>
              </ul>
            </div>

            <div className="col-start-9 col-span-4">
              <img src="/img/good-deeds/Phone3.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Second, focus on gamification...</p>
          <p className="text-good-deeds-gray-300 pt-4 pb-8">
            I felt confident about the functionality for a first time user with about a week to spare in the month-long sprint. I spent that time trying to envision the graphical brand for GoodDeeds as a whole, and it proved a trying task for one person in that short amount of time in between usability tests. So I had to compromise. I elevated the original place holder boxes, but only by one “level”. I had originally envisioned several levels a building would undergo to make the city “grow”.
          </p>

          <img src="/img/good-deeds/Map.png" className="mx-auto"/>
        </div>
      </section>

      <section className="bg-white pt-6 pb-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">The final solution...</p>

          <div className="bg-gray-800 h-64">
            <span className="text-white">Video</span>
          </div>
        </div>
      </section>

      <section className="bg-good-deeds-green-100 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Feedback from users...</p>
          <p className="py-6 text-good-deeds-gray-300">
            Feeback was a constant part of this design sprint. We had three different rounds at the end of each week and iterative stage. At the end of the project, we did one last test that was a mix of desirability and usability. Each of our designs was placed in front of our users. And even though we did not converge on one design as a team, it was hard for users not to compare between them. In terms of actionable feedback, these are some key takeaways;
          </p>

          <p className="text-3xl text-center font-light text-good-deeds-gray-300"><span className="text-4xl">&#8220;</span>It looks so <span className="font-semibold text-good-deeds-orange-400">simple</span> that I can navigate it. <span className="font-semibold text-good-deeds-orange-400">I don't feel overwhelmed</span> popping back into it.<span className="text-4xl">&#8222;</span></p>

          <div className="flex justify-around pt-8">
            <div className="text-gray-700 text-center max-w-xs">
              <FontAwesomeIcon icon={faCheckCircle} className="text-good-deeds-green-200 text-8xl mb-6" />
              <ul className="text-base text-good-deeds-gray-300 text-left">
                <li><span className="text-good-deeds-orange-400">*</span> Navigation is easy and simple</li>
                <li><span className="text-good-deeds-orange-400">*</span> Organized and professional word associations</li>
                <li><span className="text-good-deeds-orange-400">*</span> Clean/Concise and Readable</li>
              </ul>
            </div>

            <div className="text-gray-700 text-center max-w-xs">
              <FontAwesomeIcon icon={faExclamationCircle} className="text-good-deeds-blue-500 text-8xl mb-6" />
              <ul className="text-base text-good-deeds-gray-300 text-left">
                <li><span className="text-good-deeds-orange-400">*</span> Colors might be too "dull"</li>
                <li><span className="text-good-deeds-orange-400">*</span> Could be more encouraging (introduce some confirmation screens with more excitement).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-good-deeds-blue-100 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Many future recommendations...</p>
          <p className="pt-6">
            As many problems began to reach out of scope, we had to narrow our priorities to the brief at hand. But we noted a few things we would have liked to tackle next;
          </p>

          <div className="pt-8">
            <p className="text-4xl font-extrabold text-good-deeds-blue-500">1. A new onboarding flow...</p>
            <p className="pt-6">
              As the UX team noticed in their own process, the onboarding flow was a pain point for testees. But where their solution was to make the onboarding always accessible, we found something else. The onboarding was the issue itself, because it was instructive, but did not elevate retention of those instructions. We suggested a live onboarding process, where the app takes the user through the motions and makes them learn how the features work, not simply just remember them.
            </p>
          </div>

          <div className="pt-8">
            <p className="text-4xl font-extrabold text-good-deeds-blue-500">2. Gamification as a single sprint...</p>
            <p className="pt-6">
              Since we had no gamification features to build off of from the cold handoff, each designer approached gamification in a different way. This lead to many discoveries when testing the iterations side-by-side with users as we did. We suggested an entire sprint dedicated to this important aspect of the app since it required further optimization.
            </p>
          </div>

          <div className="pt-8">
            <p className="text-4xl font-extrabold text-good-deeds-blue-500">3. Graphics focused on branding...</p>
            <p className="pt-6">
              Many associations were gathered for each of our designs. For mine, people saw similarities with the Sims primarily. The graphics alone can speak volumes for a product like this, like Minecraft and Animal Crossing have their own signature looks. For this kind of success, we would require more focus on the graphics specifically, maybe even going so far as to hire or assign a graphic designer to the task.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-good-deeds-green-100 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-good-deeds-blue-500">Translating this styleguide...</p>

          <p className="text-good-deeds-gray-300 py-2 lg:py-6">
            The style guide was very focused on spacing and assets. So there were a lot of grid guidelines to consider. A lot of that was to make the app highly accessible for anyone to use. The colors and typefaces had to be legible and clear, which is why the final iteration was primary in theme. The guide looked really small in retrospect, but it has a lot of repeated elements in various scenarios throughout the app.
          </p>

          <img src="/img/good-deeds/StyleGuide.png" className="mx-auto lg:max-w-3xl" />
        </div>
      </section>

      <section className="bg-white pt-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-good-deeds-gray-300">
            GoodDeeds was a very challenging app, due to its shockingly large scope, a troubling UX cycle, and Covid-19 preventing proper research. But in those challenges, I was able to find opportunities. I learned a lot about priority management for a project and reflecting on the brief as a source of truth. These were key skills to learn before being placed before a client, which was the task ahead of us in our coursework. Even with its pain points, GoodDeeds remains a highly influential project in my young career.
          </p>

          <p className="text-5xl text-center font-extrabold text-good-deeds-orange-400 py-8">Thanks for reading!</p>

          <img src="/svg/good_deeds/2x/Asset 2@2x.png" className="mx-auto lg:max-w-lg" />

          <GoodDeedsPhoneTop className="mx-auto lg:mx-w-md" />
        </div>
      </section>
    </>
  )
}
