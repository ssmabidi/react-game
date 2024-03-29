import React from 'react'
import Timer from './Timer'

const stop = () => {
	document.onkeydown = () => {
	}
}

const BoardComponent = (props) => {
	let completed = 0;
	props.field.forEach((el) => {
		el.forEach((item) => {
			if(item == 1){
				completed++;
			}
		})
	})

	let key = 1;
	let field = props.field.map((item, q) => {
		let rows = item.map((el, p) => {
			return (
				<div className="element" key={key++}>
					<img src={
						p == props.playerPos.x && q == props.playerPos.y ? "https://pp.userapi.com/c840525/v840525256/3751f/qw3Fjb9VTko.jpg" : //player
						el == 1 ? "https://pp.userapi.com/c840525/v840525256/37518/SA7qCmMFDr8.jpg" : //dot
						el == 2 ? "https://pp.userapi.com/c840525/v840525256/37511/Qj5HtdCqgfk.jpg" : //box
						el == 0 ? "https://pp.userapi.com/c840525/v840525256/3750a/4tcOAErmNzM.jpg" : //wall
						"https://pp.userapi.com/c841035/v841035256/55ce4/BDyGpOHwGw0.jpg" //nothing
					}/>
				</div>
			)
		})
		rows.push(<br />)
		return rows
	})

	if(completed == 0){
		stop();
	}

	const OPTIONS = { prefix: 'seconds elapsed!', delay: 100} 
	return (
		<div className="box">
			{field}
			<span>Collected grapes: {props.collected} <br /></span>
			<span> Moves: {props.moves}</span>
			<Timer stop={completed == 0 ? true : false} options={OPTIONS}/>
			
			{completed == 0 && <div style={{fontSize:'20px'}}>YOU WIN! YOU WIN! YOU WIN! YOU WIN! YOU WIN!</div>}
		</div>
	)
}



export default BoardComponent