import VentePersona from '../../public/svg/vente/persona.svg'
import VentePhoneTop from '../../public/svg/vente/phone-top.svg'
import VenteLogo from '../../public/svg/vente/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function Vente() {
  return(
    <>
      <section className="bg-vente-tan-100">
        <div className="container mx-auto pt-10">
          <VenteLogo className="mx-auto max-w-md" />
          <p className="text-4xl text-vente-orange-400 text-center"><span className="font-semibold">Events App UI</span> (Student Project)</p>
          <VentePhoneTop className="mx-auto mt-6" />
        </div>
      </section>

      <section className="bg-white pt-12 pb-6">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-800">The task ahead...</p>

          <p className="text-vente-blue-400 py-6">
            Vente was a project handed to us UI designers from a previous UX team. Our stakeholders noticed a demand for an events app, but one, unlike anything, already existing. The events marketplace is oversaturated with apps that claim they have “everything”, but there was an opportunity to tune “everything” to the user’s specific needs.
          </p>

          <p className="font-light text-3xl text-center text-vente-blue-400 leading-normal">&#8220;Users need a way to stay <span className="font-semibold text-vente-orange-400">up-to-date</span> with the local scene, but have difficulty finding <span className="text-vente-orange-400 font-semibold">personalized</span> events that keep their interest.&#8222;</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-800">Meet Nate, the "Event Junkie"</p>

          <div className="grid grid-cols-12 grid-rows-6 grid-flow-col gap-5 pt-6">
            <div className="row-span-4 col-span-6">
              <ul className="text-base text-vente-blue-400">
                <li><span className="text-vente-orange-400">*</span> Urbanite</li>
                <li><span className="text-vente-orange-400">*</span> Young Professional - Writer</li>
                <li><span className="text-vente-orange-400">*</span> Wants to stay current with the local scene</li>
                <li><span className="text-vente-orange-400">*</span> Wishes for the scoop on local classes, events, and meetups.</li>
                <li><span className="text-vente-orange-400">*</span> Frustration: Too much is happening at once.</li>
              </ul>
            </div>
            <div className="row-span-2 col-span-6 text-xl text-vente-blue-400">
              <span className="font-light">&#8220;</span>I need something that will show me all the local happenings in an <strong className="text-vente-orange-400">organized and accessible</strong> way.<span className="font-light">&#8222;</span>
            </div>
            <div className="row-span-6 col-span-5">
              <VentePersona style={{ maxHeight: 20.75 + 'rem' }} />
            </div>
          </div>

          <p className="text-vente-blue-400 pt-12">
            Nate's wants were actually perplexing. From the outside, it seemed that competitors in this space were already providing this organized and personal experience. But in actuality, they were providing a trove of options, and it was overwhelming users. People like Nate with busy work lives needed something quick to reference, not another catalog to search through.
          </p>
        </div>
      </section>

      <section className="bg-vente-green-400 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-900">So, how Do I...</p>
        </div>

        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="text-vente-blue-400">
              <div className="grid grid-rows-2 grid-flow-col gap-5">
                <div className="row-span-2"><strong className="text-8xl text-white">1</strong></div>
                <div className="row-span-2 pt-8 text-vente-blue-900"><p>Ensure a complete up-to-date search experience?</p></div>
              </div>
            </div>

            <div className="text-vente-blue-400">
              <div className="grid grid-rows-2 grid-flow-col gap-5">
                <div className="row-span-2"><strong className="text-8xl text-white">2</strong></div>
                <div className="row-span-2 pt-8 text-vente-blue-900"><p className="leading-normal">Make events more personalized?</p></div>
              </div>
            </div>

            <div className="text-vente-blue-400">
              <div className="grid grid-rows-2 grid-flow-col gap-5">
                <div className="row-span-2"><strong className="text-8xl text-white">3</strong></div>
                <div className="row-span-2 pt-8 text-vente-blue-900"><p className="leading-normal">Not overwhelm our user with the information?</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-800">Studying a saturated marketplace...</p>
          <p className="text-vente-blue-400 pt-4 pb-8">
            The events space is full of promising apps that are all competing to be the end-all destination for booking and planning events. But, events is such a broad topic. There was an opportunity here for a product that tuned in to the user’s channels and network and curated all types of events, from friends’ birthday parties to concerts downtown. An app that didn’t overwhelm with options, but assisted in the search.
          </p>

          <img src="/img/vente/matrix.png" className="max-w-xl mx-auto"/>
        </div>
      </section>


      <section className="bg-vente-tan-100 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-800">First, brainstorm some principles...</p>
          <p className="text-base text-vente-blue-400 pt-6">I began identifying the brand by establishing some keywords that I wanted Vente to emulate. This was a stream-of-consciousness exercise for about 5-10 minutes at the start of my project. I started with some of the words I kept repeating during the research process, ____ and ____ being a few. I kept writing the next word that came to mind after these, and it trickled down from there. Later in my process, I was able to return to these words, and refine them into actual design principles.</p>

          <div className="flex justify-around pt-6">
            <div className="text-gray-700 text-center px-4 py-2 m-2">
              <p className="text-4xl text-vente-orange-400"><strong>Breathable</strong></p>
              <p className="text-vente-blue-400">Not enveloping. A light interface that is welcoming and approachable.</p>
            </div>

            <div className="text-gray-700 text-center px-4 py-2 m-2">
              <p className="text-4xl text-vente-orange-400"><strong>Clean</strong></p>
              <p className="text-vente-blue-400">Consistant and minimal use of type, color, and iconography. A crisp experience.</p>
            </div>

            <div className="text-gray-700 text-center px-4 py-2 m-2">
              <p className="text-4xl text-vente-orange-400"><strong>Organized</strong></p>
              <p className="text-vente-blue-400">Structure and tight grided system. Easy to understand navigation and search.</p>
            </div>
          </div>

          <p className="text-4xl font-extrabold text-vente-blue-800">Next, sketch out the identity</p>
          <p className="text-base text-vente-blue-400 pt-6">I grouped words that were similar and tried to doodle emblems to resemble them, not spending more than a minute on a doodle. The idea was to be quick and divergent at this stage, so cleanliness and consistency were not the main priority. This lead to some repeating themes that helped to narrow my decision making for the next step.</p>

          <div className="py-6">
            <img src="/img/vente/LogoSketches.png" className="mx-auto" />
            <p className="font-light text-sm text-vente-blue-400 ml-10">Preliminary sketches for Vente's logo design.</p>
          </div>

          <p className="text-base text-vente-blue-400">I then took a few strong iterations to a digital platform and tried to diverge even more. Also, I wanted to reanalyze my creations. My intent was to have everything about the logo speak to the brand at large; no unnecessary embellishments that didn’t enhance the theme. Every minor decision needed to be backed with purpose.</p>

          <div className="flex py-6">
            <div className="flex-1 mr-4">
              <img src="/img/vente/DigSketch1.png" />
              <p className="font-light text-xs text-vente-blue-400">An example of digital sketches for the inked/marker motif.</p>
            </div>

            <div className="flex-1">
              <img src="/img/vente/DigSketch2.png" />
              <p className="font-light text-xs text-vente-blue-400">An example of digital sketches for the coffee stain motif.</p>
            </div>
          </div>

          <div className="pt-6 pb-8">
            <p className="text-4xl font-extrabold text-vente-blue-800">Finally, we have a brand...</p>
            <p className="text-base text-vente-blue-400 pt-6">After some meticulous editing, I finally had a logo for Vente. The coffee stains started out as a misassociation (with the venti size at Starbucks) but evolved into a happy little accident. Coffee rings, or maybe even wine glass rings, are the result of people gathering and connecting with each other. The sharpie handwriting can resemble your name on a to-go cup, or a handwritten note in your personal calendar. The enveloping theme of Vente is to collect and gather with others, to know everything that is happening around you. And so the circles as a shape elevate that core idea.</p>
          </div>

          <VenteLogo className="mx-auto max-w-md" />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-800">Capturing an atmosphere...</p>
          <p className="text-vente-blue-400 pt-6">
            I gathered a number of photos of events and outings someone like Nate could participate in. They ranged from food truck festivals to nightclub outings to bonfires on the beach. I then tried to focus those “atmospheres” into overall moods.
          </p>
        </div>
      </section>

      <section className="bg-white flex justify-between">
        <div className="text-gray-700 text-center px-4 py-2 m-2" style={{maxWidth: 28 + 'rem' }}>
          <FontAwesomeIcon icon={faTimesCircle} className="text-vente-orange-400 text-8xl mr-5" />
          <img src="/img/vente/mood-boards/los-angeles.png" className="py-6 mx-auto" style={{ maxHeight: 18.75 + 'rem' }} />
          <p className="text-vente-orange-400 font-semibold text-4xl">&#8220;L.A. Sunset&#8221;</p>
          <ul className="text-base text-left text-vente-blue-400 pt-6">
            <li><span className="text-vente-orange-400">*</span> Goal: To experiment with the lively and energetic motifs within the current market, but in a more universal way. The enveloping light at sunset.</li>
            <li><span className="text-vente-orange-400">*</span> Feedback was mixed. Some stated it may be “too feminine”, but I interpreted that as bias.</li>
            <li><span className="text-vente-orange-400">*</span> The warmth and light motifs were desirable to viewers.</li>
          </ul>
        </div>

        <div className="text-gray-700 text-center px-4 py-2 m-2" style={{maxWidth: 28 + 'rem' }}>
          <FontAwesomeIcon icon={faCheckCircle} className="text-vente-green-300 text-8xl mr-5" />
          <img src="/img/vente/mood-boards/urban.png" className="py-6 mx-auto" style={{ maxHeight: 18.75 + 'rem' }} />
          <p className="text-vente-orange-400 font-semibold text-4xl">&#8220;Breath of Fresh Air&#8221;</p>
          <ul className="text-base text-left text-vente-blue-400 pt-6">
            <li><span className="text-vente-orange-400">*</span> Goal: Based around brick and mortar hipster shops on could frequent. More textures and handwritten effects. Elements one could be exposed to on a daily basis in an urban landscape.</li>
            <li><span className="text-vente-orange-400">*</span> Viewers felt something about sketched lines and inked impressions.</li>
            <li><span className="text-vente-orange-400">*</span> The stark lines and layout were also enticing.</li>
            <li><span className="text-vente-orange-400">*</span> The colors were pleasing but too inconsistent for some</li>
          </ul>
        </div>

        <div className="text-gray-700 text-center px-4 py-2 m-2" style={{maxWidth: 28 + 'rem' }}>
          <FontAwesomeIcon icon={faTimesCircle} className="text-vente-orange-400 text-8xl mr-5" />
          <img src="/img/vente/mood-boards/transparent.png" className="py-6 mx-auto" style={{ maxHeight: 18.75 + 'rem' }} />
          <p className="text-vente-orange-400 font-semibold text-4xl">&#8220;Reflective&#8221;</p>
          <ul className="text-base text-left text-vente-blue-400 pt-6">
            <li><span className="text-vente-orange-400">*</span> Goal: A bright Saturday afternoon outdoors, at an amusement park or festival. The clear sky and surrounding vibrancy of color everywhere.</li>
            <li><span className="text-vente-orange-400">*</span> Some connections with “youth” but leaning more towards "juvenile".</li>
            <li><span className="text-vente-orange-400">*</span> Too much color and not enough whitespace, in composition or the images.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white pt-6">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-800">Refining a theme...</p>
          <p className="text-vente-blue-400 pt-4">
            This was one of many style tiles I diverged upon, but this particular one proved to be my foundation moving into high fidelity. I jumped off the appeal viewers had with the “urban grid”, specifically the sketched lines and everyday items one could interact with. The goal was to appeal to the professional side of Nate and his writing career in all elements. And everyone knows the feeling of paper and leaving an impression or mark. The structure of a grid and neutral palette were to complement that paper aesthetic.
          </p>

          <img src="/img/vente/Vente2.png" className="pt-6" />

          <div className="grid grid-cols-12 grid-rows-4 grid-flow-col gap-5 pt-8">
            <div className="row-span-2 col-span-2"><FontAwesomeIcon icon={faCheckCircle} className="text-vente-green-300 text-8xl mr-5" /></div>
            <div className="row-span-2 col-span-2"><FontAwesomeIcon icon={faTimesCircle} className="text-vente-orange-400 text-8xl mr-5" /></div>

            <div className="row-span-2 col-span-10">
              <ul className="text-base text-left text-vente-blue-400">
                <li><span className="text-vente-orange-400">*</span> The paper representation was very well received. Connecting digital and realistic spaces. Another connection for the brand.</li>
                <li><span className="text-vente-orange-400">*</span> The muted tones are still vibrant enough to be exciting, but mellow enough to bring a calmness.</li>
                <li><span className="text-vente-orange-400">*</span> The photo treatments with the low saturation fit nicely with this theme.</li>
              </ul>
            </div>

            <div className="row-span-2 col-span-10">
              <ul className="text-base text-left text-vente-blue-400">
                <li><span className="text-vente-orange-400">*</span> The typography leans into the "mechanical". The stenciled look, while comprehensible, isn’t connecting.</li>
                <li><span className="text-vente-orange-400">*</span> The navigation creates a disjoint for the composition of the app.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-vente-green-200 pt-6 pb-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-800">Taking it to High Fidelity</p>

          <div className="bg-gray-800 h-64">
            <span className="text-white">Video</span>
          </div>
        </div>
      </section>

      <section className="bg-vente-green-150 py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-900">How did I...</p>
        </div>

        <div className="container mx-auto sm:px-2">
          <div className="grid grid-cols-12 gap-5 py-8">
            <div className="col-span-1 text-8xl font-extrabold text-white">1</div>

            <div className="col-start-2 col-span-6 pt-8">
              <p className="text-2xl font-extrabold text-vente-blue-900">
                Ensure a complete up-to-date search experience?
              </p>

              <ul className="pt-8 text-vente-blue-900">
                <li className="mb-6"><span className="text-vente-orange-400">*</span> A focus on the time and date of an event; Bright orange takes the focus of the user.</li>
                <li><span className="text-vente-orange-400">*</span> Consistency of that hierarchy throughout the app. Follows the same rules for thumbnails and grids as it does on the landing pages.</li>
                <li><span className="text-vente-orange-400">*</span> "This week" category; curated by the app, not the user. Vente populates suggestions based on the current date and what's upcoming.</li>
              </ul>
            </div>

            <div className="col-start-9 col-span-4">
              <img src="/img/vente/phones/1.png" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 py-8">
            <div className="col-span-1 text-8xl font-extrabold text-white">2</div>

            <div className="col-start-2 col-span-6 pt-8">
              <p className="text-2xl font-extrabold text-vente-blue-900">
                Make events more personalized?
              </p>

              <ul className="pt-8 text-vente-blue-900">
                <li><span className="text-vente-orange-400">*</span> Interests, at the beginning of the user journey and accessible in the profile section.</li>
                <li><span className="text-vente-orange-400">*</span> Friends in attendance for events, connecting to social networks and calendars.</li>
                <li><span className="text-vente-orange-400">*</span> Favorites options for events. Users later suggested functionally the hearts should work like "saves" instead of "following". Too confusing because of sites like Instagram.</li>
              </ul>
            </div>

            <div className="col-start-9 col-span-4">
              <img src="/img/vente/phones/2.png" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 py-8">
            <div className="col-span-1 text-8xl font-extrabold text-white">3</div>

            <div className="col-start-2 col-span-6 pt-8">
              <p className="text-2xl font-extrabold text-vente-blue-900">
                Not overwhelm our user with the information?
              </p>

              <ul className="pt-8 text-vente-blue-900">
                <li><span className="text-vente-orange-400">*</span> Broken up grids, both vertical and horizontal to help the eye navigate the separated spaces.</li>
                <li><span className="text-vente-orange-400">*</span> Tabs with clean headings for the sections. Not an endless scroll.</li>
                <li><span className="text-vente-orange-400">*</span> The hierarchy with the colors is intentional. The muted colors of text sit further back on the screen while the more vibrant and larger words take center stage. This gives the eye room to relax.</li>
              </ul>
            </div>

            <div className="col-start-9 col-span-4">
              <img src="/img/vente/phones/3.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-700">Feedback from users...</p>
          <p className="py-6 text-vente-blue-400">
            For this project, we only had one round of user testing. The test was a true hybrid, focusing on both usability and desirability. Participants were asked to go through two flows as shown by the prototype above; A first-time user sign up flow and choosing an activity in the health/wellness section of the app. Some key takeaways are:
          </p>

          <div className="flex justify-around pt-8">
            <div className="text-gray-700 text-center max-w-xs">
              <FontAwesomeIcon icon={faCheckCircle} className="text-vente-green-300 text-8xl mb-6" />
              <p className="text-4xl font-semibold text-vente-orange-400">Areas of Success</p>
              <ul className="text-base text-vente-blue-400 text-left">
                <li><span className="text-vente-orange-400">*</span> CTA's are directing action, but not overpowering or overwhelming.</li>
                <li><span className="text-vente-orange-400">*</span> The theme as a whole has high appeal.</li>
                <li><span className="text-vente-orange-400">*</span> Words used to describe it; "Neutral, Soft, Inviting".</li>
              </ul>
            </div>

            <div className="text-gray-700 text-center max-w-xs">
              <FontAwesomeIcon icon={faExclamationCircle} className="text-vente-orange-300 text-8xl mb-6" />
              <p className="text-4xl font-semibold text-vente-orange-400">Areas to Adjust</p>
              <ul className="text-base text-vente-blue-400 text-left">
                <li><span className="text-vente-orange-400">*</span> Inactive states are not as clear as intended.</li>
                <li><span className="text-vente-orange-400">*</span> Some word and intent discrepancies like "following" vs. "favorites".</li>
                <li><span className="text-vente-orange-400">*</span> Minor layout adjustments to grids</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-vente-green-200 py-6">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-900">A responsive marketing site...</p>
          <p className="text-vente-blue-400 pt-4">
            The brief also required a responsive marketing site in order to represent Vente overall. This project is very brand heavy, so the composition of the site needed to follow the same guidelines as the style guide I was building for the mobile app as well. For this site, I focused on the communal aspects of the brand, people connecting and gathering, since that was not a direct showcase on the app itself.
          </p>

          <div className="flex pt-6">
            <div className="w-3/4">
              <img src="/img/vente/LaptopResponsive.png" className="pt-8"/>
            </div>

            <div className="w-1/4">
              <img src="/img/vente/AndroidResponsive.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-vente-tan-100 py-6">
        <div className="container mx-auto px-2 lg:px-20">
          <p className="text-4xl font-extrabold text-vente-blue-800">Creating this styleguide...</p>

          <p className="text-vente-blue-400 py-2 lg:py-6">
            Translating to the style guide was a very streamlined experience since I applied many internal rules to follow my “organized” principle. However, I created the style guide by hand, as if it were a printable document. Later I was introduced to the software “Zeplin” which would have made the experience silky smooth. This realization was something I began to study for my next project. Another tool for my arsenal.
          </p>

          <img src="/img/vente/StyleGuideClip.png" className="mx-auto lg:max-w-2xl" />

          <p className="text-vente-blue-400 py-2 lg:py-6">
            Overall, Vente proved to be a large task to undertake alone. From branding to high fidelity, this brief was very detail-oriented and large in scope looking back on it now. But after presenting this before my instructors and peers, I had (and still have) an immense amount of pride attached to this project. It was a steep learning curve, but the end results were very satisfying.
          </p>
        </div>
      </section>

      <section className="bg-vente-tan-100">
        <div className="container mx-auto px-2 lg:px-20">
          <VenteLogo className="mx-auto max-w-md" />
          <p className="text-5xl text-center font-extrabold text-vente-blue-300">Gather and Connect</p>
          <VentePhoneTop className="mx-auto mt-6" />
        </div>
      </section>
    </>
  )
}
