function Home() {
  function handleClick(e) {
    console.log(e.target.value);
  }
  return (
    <main>
      <div className="circle"></div>
      <section>
        <h1>hey - heyU</h1>
        <h3>
          We all need some help remembering the basics - so choose what you'd
          like to be reminded about, and then we can set some nudges for you
        </h3>
        {/* <label htmlFor="alarms"> Choose</label> */}
        <select name="alarms" onClick={handleClick}>
          <option value="" disabled defaultValue>
            What do you want a nudge for?
          </option>
          <option value="hydration">Hydration</option>
          <option value="stretching">Stretching</option>
          <option value="break">Break</option>
        </select>
      </section>
    </main>
  );
}

export default Home;
