import React, { useEffect } from "react";
import { useState } from "react";

function FunctionalComponent() {
  let [score, setScore] = useState(0);
  let[age , setAge]=useState(0)

  useEffect(() => {
    console.log("functional component Loade");
  }, []);

  useEffect(() => {
    console.log("score variable is change");
  }, [score]);
  useEffect(() => {
    console.log("age variable is change");
  }, [age]);

  useEffect(()=>{
    console.log("age or score is changing")
  },[score,age])
useEffect(()=>{
    console.log("any state variable is changed")
})

  useEffect(() => {
    return () => {
      console.log("FC unload");
    };
  }, []);
  return (
    <div  className="App">
      <h1>FC Component</h1>
      <h2>score:{score}</h2>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setScore(score - 1);
        }}
      >
        -
      </button>

      <h2>age:{age}</h2>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setAge(age - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default FunctionalComponent;
