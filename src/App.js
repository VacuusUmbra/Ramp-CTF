import React from "react";
import useFetchData from "./FetchData";
import TextTyper from "./TextTyper";

/*
  Python script used to get URL in step 2:
  import requests
  from bs4 import BeautifulSoup 

    url = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge'  
    response = requests.get(url)

    soup = BeautifulSoup(response.content, "html.parser")

    print(''.join([node.get('value') for node in soup.select('ul[data-tag*="75"] li[data-id^="98"] div[data-class*="35"] span.value')]))
*/

function App() {
  const { data, loading } = useFetchData(
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/736c6f"
  );
  const DELAY = 500;

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : <TextTyper text={data} delay={DELAY} />}
    </div>
  );
}

export default App;
