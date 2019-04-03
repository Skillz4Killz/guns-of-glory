import React from "react"

export default props => {
  const levelKeys = Object.keys(props.building).filter(l =>
    l.startsWith("level_")
  )
  return (
    <div>
      {levelKeys.map((key, index) => {
        const level = props.building[key]
        return (
          <div key={index}>
            <h1>
              {props.name} {key.replace("_", " ").toUpperCase()}
            </h1>
            {level.required && level.required.length ? (
              <p>
                Required:
                {level.required.map((req, index) => (
                  <div key={index}>
                    <span>{req.name}</span> <span>Level {req.level}</span>
                  </div>
                ))}
              </p>
            ) : null}
            <p>
              Resources:{" "}
              {level.resources && level.resources.food ? (
                <span>Food {level.resources.food.toLocaleString()}</span>
              ) : null}{" "}
              {level.resources && level.resources.wood ? (
                <span>Wood {level.resources.wood.toLocaleString()}</span>
              ) : null}{" "}
              {level.resources && level.resources.iron ? (
                <span>Iron {level.resources.iron.toLocaleString()}</span>
              ) : null}{" "}
              {level.resources && level.resources.silver ? (
                <span>Silver {level.resources.silver.toLocaleString()}</span>
              ) : null}{" "}
              {level.resources && level.resources.badges ? (
                <span>Badges {level.resources.badges.toLocaleString()}</span>
              ) : null}
            </p>
            <p>Upgrade Time: {level.time.value}</p>
            <p>Lord XP: {level.xp || 0}</p>
            <p>Power Gain: {level.power || 0}</p>
            {level.unlocks && level.unlocks.length ? (
              <p>Unlocks: {level.unlocks}</p>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
