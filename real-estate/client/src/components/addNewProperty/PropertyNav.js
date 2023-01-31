import React from 'react';
import '../RealEstate.css';
import {
Nav,
NavLink,
NavSpan,
Bars,
NavMenu
} from './PropertyNavElements';

export default function PropertyNav({step, navStep}) {

	const changeStep = (event) => {
		const stepNav = event.currentTarget.id;
		// console.log(stepNav);
		if(stepNav === "basic_info"){
			navStep(1);
		}
		else if(stepNav === "property_detail"){
			navStep(2);
		}
		else if(stepNav === "general_info"){
			navStep(3);
		}
		else if(stepNav === "location_info"){
			navStep(4);
		}

	}
	return (
	<>
    {/* <ul>
        <li><NavLink class="active" to="/basic_info" className="link">Home</NavLink></li>
        <li><NavLink to="/property_detail" >News</NavLink></li>
        <li><a href="#contact" className="link">Contact</a></li>
        <li><a href="#about" className="link">About</a></li>
    </ul> */}

	<Nav>
		<Bars />

		<NavMenu>
		<NavLink id="basic_info"  className={`${ step === 1 ? "active" : "" }`} onClick={changeStep}>
			<NavSpan  className={`${ step === 1 ? "active" : "" }`}>1</NavSpan>Basic Info
		</NavLink>
		<NavLink id="property_detail"  className={`${ step === 2 ? "active" : undefined }`} onClick={changeStep}>
            <NavSpan  className={`${ step === 2 ? "active" : undefined }`}>2</NavSpan>Property Detail
		</NavLink>
		<NavLink id="general_info"  className={`${ step === 3 ? "active" : undefined }`} onClick={changeStep}>
            <NavSpan  className={`${ step === 3 ? "active" : undefined }`}>3</NavSpan>General Info
		</NavLink>
		<NavLink id="location_info"   className={`${ step === 4 ? "active" : undefined }`} onClick={changeStep}>
            <NavSpan  className={`${ step === 4 ? "active" : undefined }`}>4</NavSpan>Location Info
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};