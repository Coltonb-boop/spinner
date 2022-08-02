const spinner = () => {
  let delay = 100;
  let symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n']

  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => {
      process.stdout.write(symbols[i]);
    }, delay);
    delay += 200;
  }
}

spinner();