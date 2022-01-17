import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
			<p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quam quaerat eaque sed aut praesentium veritatis placeat quae, nam omnis mollitia nemo, porro sit fugit ratione provident iure sapiente tenetur.</p>
			<div className={styles.wrapper}>
				{pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza}/>
				))}
			</div>
		</div>
	)
}

export default PizzaList