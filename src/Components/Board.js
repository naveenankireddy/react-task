import React from "react";

function Board(props) {
  const drop = (e) => {
    e.preventDefault();
    const target = e.target;
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.visibility = "visible";
    target.appendChild(card);
    e.stopPropagation();
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Board;
