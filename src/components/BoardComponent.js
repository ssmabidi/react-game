import React from 'react'

const BoardComponent = (props) => {
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
	return (
		<div>
			{field}
			<span>collected dots:{props.collected}</span>
		</div>
	)
}

export default BoardComponent