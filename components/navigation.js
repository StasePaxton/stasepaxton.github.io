import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

    this.links = [
      { href: '/', label: 'Home' },
      { href: '/design', label: 'Design' },
      { href: '/art', label: 'Art' },
      { href: '/about', label: 'About & Contact' },
    ]
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <header className="sm:flex sm:justify-between sm:items-center md:mx-12 sm:mt-5">
        <div className="flex items-center justify-between mx-2 md:mx-4 my-3 sm:p-0">
          <div className="text-4xl">
            <Link href="/"><a><strong>Stase</strong><span className="font-thin">Paxton</span></a></Link>
          </div>

          <div className="sm:hidden">
            <button onClick={this.handleClick} type="button">
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </div>
        </div>

        <nav role="navigation" className={`${this.state.isToggleOn ? 'block' : 'hidden'} px-2 pt-2 pb-4 sm:flex sm:p-0`}>
          {this.links.map(({ href, label }) => (
            <Link href={href} key={`${href}${label}`}><a className="mt-1 block px-2 py-1 sm:mt-0 sm:ml-2">{label}</a></Link>
          ))}
        </nav>
      </header>
    )
  }
}

export default Navigation
