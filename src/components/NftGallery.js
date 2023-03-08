import { useState, useEffect } from 'react';
import axios from 'axios';


function NFTs() {
  const [nftData, setNftData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          'accept': 'application/json',
          'X-API-Key': 'YbpLmwLcru9pV449Rtl5pwHN4Kyb612bdovx4NQLRXpvNUjUQfdRMaGy7V4SOUZy',
          'content-type': 'application/json'
        }
      };

      try {
        const response = await axios.get('https://deep-index.moralis.io/api/v2/0xa0a1c5bb26ac8382814ea66ffdfaf85fe1baf49d/nft?chain=polygon&format=decimal&normalizeMetadata=true', config);
        const nftDataWithLinks = response.data.result.filter(nft => !!JSON.parse(nft.metadata || '{}').external_url);
        setNftData(nftDataWithLinks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (externalUrl) => {
    window.location.href = externalUrl;
  };

  return (
    <div>
    

      {nftData && (
        <table>
          <tbody>
            {nftData.map((nft) => (
              <tr key={nft.token_id} className="nft-item" onClick={() => handleClick(JSON.parse(nft.metadata || '{}').external_url)}>
                <td>Name: {nft.name}</td>
                <td>Token_Adress: {nft.token_address}</td>
                <td>Token_id: {nft.token_id}</td>
                <td>Chain: Polygon</td>

              

              </tr>
            ))}
          </tbody>
        </table>
      )}
     
    </div>
  );
}

export default NFTs;
