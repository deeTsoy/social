import React from 'react'; 
import styles from './post.module.css'


const Post = ({massage, likes}) => { 
    return (
    <div className={styles.item}> 
      <img src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBAQEBAWEBAWEBYbEBUVDRcQEA4gIB0iIiAdHx8kKDQsJCYxJx8fJTIlMSwuLzAwIys1TD8uNzQuMC0BCgoKDg0OFxAQFSsdHR4tKystKy0tKy0xLCs3Ky0rLS0tLystKystNysrKys3NysuLS04NzgrLS04Li00Ky0rLf/AABEIALgAuAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECAwUGBAj/xAA+EAABAwICBwUGBQIFBQAAAAABAAIDBBEFIQYHEjFBUWETInGBkRQyUqGxwQgjQmLRsuEzc4KS8CQlQ1Ny/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQGBf/EACERAQEAAgIBBAMAAAAAAAAAAAABAhEDMRIFQVFhBCGh/9oADAMBAAIRAxEAPwCGkREBAFnhpySBYkk5AC5K7zANVeJVDQ8xtpYyMjMdlx/0jP1QR7sHkqKYpNSFTs3bWRF3IxPA9Vxek+gtfRXM8N4v/bGduPzPDzQciiuewg23rLBSucQ0Alx3ADacUGBAF22Cas8TqAC2mMTD+qY9kPQ5/Jdlh+pCTIz1rW8xHCXfMkfRBDIjPJV7IqZtMNWFDRYfUVXbzSSMYNi7mNY5xIAuLdVDm2UiyWrOyKp2Z5LJ2hVe0KujxrCWnkjG3Nln7ToqhwTRqqOdbILHdVJVFW5NCva9WIi2bZHsB8V5yFnY5UnbxWa52aYUREQXppIC5zQ0FznEBoG8k7l52i5AUp6jcBbNWPqXi7Kdo2ARltu3HyAPyQSDq41exULGzzgSVjgCSRdtP+1vXmV3iIoorJI2uBa4BzSLEEXDuhCvRBFmK6moJKztYpuwpXZvia272m+YadwH0Xc6P6LUVG0NpoGsPF5G3K7xcc1ukQEREEca+KrZwtrL5yVLB42BP2Xzypq/ERU9ygi5ulefIAD6lQqtRvHoREVaEREBERAREQFldu8liWU+75KVjN5kRFGF0O8Kevw/Aey1h4+0Nv8A7VAjTmCpQ1MaSez1EsDj+XM0EDq3l5H5IPoBFip6hj27THBw6LKooiIgIiICIiCB/wAQc962lZ8NMT6uP8KKlI2viS+KgfDSxj5uP3Ucrc6dJ0IiIoiIgIiICIiCrQqzu4Iw2Vszc781K55dsaIijIvXh9W6N7HsNntcC0+C8iujbcoJ20W0iE8QlieWSAAStBsWH+F0sWN1Rs1rto8O4CVqdTWirIqL2qZgdLUZt2hfYYPd9d/opGigY33Whvg2yi7eDCIp/wDEnebkd1m4N6lbNEQEREBERB84a73XxiXpDF/SuBXe67h/3iX/ACYv6VwS3HSdCIiKIiICIqtBJAGZO5DtRFdLGWktORG9Wotll1RXgXFlYrmHNKxZuMJCLJM3PxVFlzWLY4HQmaaGEb5JWNHmbLXKQNTeHiTFYCRcRNe8+QsPmQg+jKaBsbGRsFmsaGtHIAWCyoiiiIiAiIgIiIPnbXtHbFr/ABU0R+o+yjtSl+IKC1dTP+Klt6OP8qLVuOk6ERXMYSbAXJ3Ism/1FqK98bgbEEHwWanopH7m2HM5BS5STdrphxZ55eOONtecAnIb1vMMoNjvuzdwHwq+kpGRZkja5k29F6mzNNyHA232K8PPz3Kax6fR+nenYcOUz5rPL2nw5/Ez+a/x+y8qvnftOc7mSrF7sJrGR87z5+fLnlPe2/0REVcl8oyuiqPdRRxYG7x4qYPw/wBPeqrJLe7A1o83f2UPs3jxU3fh7blXnjeIf1KCYkRFFEREBF4MVxmmpml9RM2MAXzzPoM1xlRrcw/aLYdqQN957h2UY8Ae8fJqCQkWj0V0khrou1i3dSL+i3iCG/xEUvdoJuTpGHzAI+hULL6I17Um3hW3a5jqIz4A3afqF87rU6bx6FtaIMibtv8AeO4byAtWCqveSbk3Kznj5fr2er8fnnDfOTeXt8T7byDEmOJFi3K9zuXkrMVJyjyHPiVrEWJ+PhLt6eT1Tnzw8d6+4ue8nMkk9VQFURdn527vYiIgIiIMke5VVIlVSuV7edm8eKmz8Pcmde3jaI/1BQkCpY1CVezXTxE/4lMSP9LgfoSoieURUUVVFYXq3bRdOO1j4AamMC0smVmxxD3/AP6/u4BR7hmpeqlk26qUQxX9wydpIfHZyHqp2aVciNPo1o9BRQiKEWHE7Ibtei9mJ4pBTs7SomZCzm94bfw5rRadaXChjjZGzt6yY2p4h+rqen1WmwfV6ZnirxmU1dS4X7Im0EH7bDfb0QarTfWBQ1lJU0VNFPVOkZZrmQHYaQbg8945KG5cAq2i7qaZo5mneB9F9PYjjWG4cwNkkipRbusa0Bx8GtF14sL1i4XPIIo6oB7jZoex0Yd0BIsrKbsfLzoyMrK1fWGkGiFDWNInp2lxGUjRsSt8CPuoF1iaBS4c8OBMtM8/lyWsWn4XdfqrK1MvlxKIirYiLc6IaPyV1ZFSxnZ2jd7vgaMyfRErUuYQASLX3dVYui09lg9tkipgBTwNbFFb9WwLF3mbnzXOokEREaZI9yqqHJvkizXG9vOus1cYr7PiVHKTZpkDH+D+6fquTWeleRuNiDcHkg+ylY8rS6E44Kyhp6gHvFlpR8Lhk7+fNbqQKLHne5WB6ue1Y2sVd5rT0xlZgsEYWdqOWSMNCgK3HMSrZe97MeypwdzMyLjyaf8AcpQUT6O4lT4ZjGKQVMrY4pyJYpC7uDMnZPI94+ikXCtIKOpNqepimPENkBd6b1GEKay9BcRFTU1oaamB7y7aYdp8Q5Fu+wHJeTQbVnU1ojqJHCClJu1xzklAP6R9yvoeRlwWncQQVy+rM2wyFh3xvmYemzI4KjqGNAAA3AABa/SPCmVVLPTSC4fGQP2ngfI2WqrtYGFRPMb61m0DZ2yHPDfMAhe8aS0jqWaqiqGSxRxuc4teDs2G4jgor5OnYWuIO8Eg+SxrPOS95IBJc4mwHMrudENVNdVlskw9kgy7z2/mPH7W/wA2W2pdRyWj2B1FZOynp2bb3b/hYOJJ4BSVpdhbMDgovZyHVT46lssu5xL2tG0ByGdl1mg9RR4ZhMtRIA0MqJ2udsjtZy2QtaOpyChHTDSOWvqpKmXIE2jZe4iaNzR/zep2nbSk3zVERVsQBFfGELdKTnKyqscrrlUWXJaqsdY3VEQSrqV0qbT1DqSZ1oZyOzJPdY/h67vIKeS4L43p5CLZ2IORU/attOhVxCCd1qpjeP8A5wP1DrzQiR3NVoavEKrqrhVKNeVeyaVkbHSPcGsa0lzibBoG8qHcc0yxDFak0WEB0cA9+QHYc8fE536W9N5WfW/pFLI6HC6cnalLTMBvfc91n3Pku10KwKKgpmwssZDYzv4yO/gcETe3O4NqapGtvWTSVEp97Zd2bB9yvLpPqkZGwz4XJJHUMzawy327fC7eCpMFV1VwqUELxa4qmOiELotquaS0yv8AcsOJbxcuHZphXCCeAVDhFM8ulGQuSbuseF+NlvNcWDNhxB0kYsydvaAcA69nfPPzXCv4BWEm1peVlhqXC4BIDhZwBIDxyPNYbJZa03ZE46vKqgqK2hfSU0cD20c/tDA25a8FgBuczxsVJOkmkVNQwmapk2G7mt3vkPJo4r5l0O0olw+Z1RCxr3mJzBt32W3tnl4Lw47jtTVymapldK/hf3W9ANwCmmJGTHcelnJZtuEAmlfFGT3Wbbi4+Jz3rUIirpJoRERRZHGwSNvFYpX3PRSueVWIiKMiIiAvZQ1j2Pa9jiyRpu1wNiF41mp4iSLC5JyA3lBNGh2sJk4EVSRFPawce7HN/B6LthVdVCbtBpuwbIHgzEXdEcrdL81TCdLq2jPYzNMjG5bElw9ngUG/0V/6rG6qrfm2JzizkM9lvyBUpCqUU6rpO7Vv4ukb9z913YqkG9FV1Vwquq0YqlcKlFcTrskDvYz+r8z07qix4Uh6UP8AbsUjpxmyKNwd42JPzsFH72WJB3g2KsJ2xWSyvsllW9qMVhCyAKmyiTtj2VRZdlC1GtsSuY1XBipK+2QUtZyyUlfwHmsKIowIiICIiC6Nlz0XdaGYWG2qJBnb8oEe7+5cxg9FtvDT7ozeu5ZUgAAZADJBvhVLDWRRSt2ZWB46jMeBWqFV1VfawMybDig8mhrxFLWQ7gHgt8LkfwurFUuBoKvarXyxA9mW2eeHj8l0YqkG9FUtZpDpCKeIkZyOyjb9z0C0uJaQtj7rPzJODRnbxWuw/DHySdvVnaO9rD9+nRBudB6EsD6qXOWXdfeBe9/NcppZRdnVSWFmvO03z3/O67ltStPpXE2SAvJs5mbT9Qg4eyWVwCrZVvbGUsruKrsokWWRX2SyKsWCcbivVZYZhkUZrzIiKIIiICyQtzuiIOiwqzGX4uzP2XuFUiILhVLXV1a6R3ZMOX6yiINhSFsbQ1uQ49Vn9q6oiDWYC8APNhtbW+2a3AquqIguFV1Wvx+q/JIvvcAiIOdaMgq2RFVUe1GFEQVsllREVWyxSjf4IiJXiREUQREQf//Z"></img>
        {massage}
        <div>
            <span>
                like:{likes}           
            </span>
        </div>
    </div> 
    );
};
 
export default Post;
