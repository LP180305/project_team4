import './Blog.css'
import { useEffect, useState } from "react";
import Loading from "../loader/loading";
import Navbar from '../Navbar';
import Footer from "../Footer";
import CommentSection from '../Comment/Comment';
function Blog(){
    
   

    const shareUrl = 'https://www.facebook.com/'; // Thay đổi thành URL của trang web 
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;  

     const handleShare = () => {  
    window.open(facebookShareUrl, '_blank', 'width=600,height=400');
    }

    const shareUrl1 = 'https://www.haylsa.com/blog/best-beaches-in-australia'; // Thay đổi thành URL của trang web 
    const instagramShareUrl = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl1)}`; 
    const handleShare1 = () => {  
    window.open(instagramShareUrl, '_blank', 'width=600,height=400');
    }

    const shareUrl2 = 'https://www.haylsa.com/blog/best-beaches-in-australia'; // Thay đổi thành URL của trang web 
    const twitterShareUrl = `https://x.com/?lang-en=/sharer/sharer.php?u=${encodeURIComponent(shareUrl2)}`; 
    const handleShare2 = () => {  
    window.open(twitterShareUrl, '_blank', 'width=600,height=400');
    }


    const top = () => {
        window.scrollTo(0, 0);
    };
      
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fakeDataFetch = () =>{
            setTimeout(() => {
                setIsLoading(false)
             },4000);
            }


            fakeDataFetch()
    },[])

    
    
    return isLoading ?(

    <Loading />) : (
        
       
       
        <div className="container">
            <Navbar/>
            <div className='extra'>
                <h1 className='fit'>15 Best Beaches in Australia for Your Australian Bucket List</h1>
                <p className="post-item">Whether you’re a local or a tourist, there’s no denying that Australia has some of the best 
                beaches in the world. From epic city beaches to pristine white sand islands with incredible wildlife,
                Australian beaches are part of the Aussie experience.</p>


                <p className="post-item">We’ve explored so much of our country and these are the best beaches in Australia 
                and my favourites that I think everyone should visit!</p>
                <h1 className="font-two">BEST BEACHES IN AUSTRALIA TO ADD TO YOUR BUCKET LIST</h1>
                <h1 className="font-two">BEST BEACHES IN WESTERN AUSTRALIA</h1>
                <p>Western Australia is home to some truly amazing beaches, and we’ve got the ones you don’t want to miss here.</p>
                <p>Get our full Perth to Exmouth road trip itinerary to visit these beaches on an epic road trip and our full guide to Esperance’s best beaches here.</p>
                <h3>WHARTON BEACH</h3>
                <p>Kicking off the list with my favourite beach in the world and definitely one of the best beaches in Western Australia!</p>
                <p>Wharton Beach/Duke of Orleans is a great accessible beach in 
                    the Esperance area, and it’s also super popular with surfers. This stretch of beach has the bluest, 
                    most pristine waters i’ve ever swam in. You feel completely disconnected from the world in what I describe as actual paradise.</p>
                <p>Head up to the 
                    eastern end of the beach near the car park 
                    for incredible views of the bay from here. You'll easily be able to see why 
                    I love this beach so much. I hope everyone has the chance to visit if they’re exploring the beautiful WA 
                    region!</p>
            </div>
            <div className="image-beach">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630283398431-DSQVN6YND2L1B3SLBFOG/Wharton+Beach+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w" alt="in-beach" />
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630283461335-Q69EH7LZXSOFXT6GJIDI/Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists+%7C+australia+bucket+list+ideas?format=750w"alt="two-beach" />
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630283377869-UL2JQACM4V02UIRIL09U/Wharton+Beach+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w" alt="beautybeach" />
            </div>
            <div className='extra'>
                <h3>LUCKY BAY, CAPE LE GRAND NATIONAL PARK</h3>
                <p>You’ve probably seen photos of this beach on social media. With white sand, 
                    turquoise water and the friendliest kangaroos, this beach makes for 
                    the perfect photo op!
                </p>
                <p>Getting up close to wild kangaroos is the ultimate Australia bucket list experience. You can sit with them and even stroke them - 
                    definitely a unique Aussie beach experience!
                </p>
                <p>You can easily visit Wharton 
                    Beach and Lucky Bay together as they’re both 
                    in Cape Le Grand National Park on the south coast of WA.
                </p>
                <p>
                If you’re spending some time in the Esperance area, check out my guide to the best beaches in Esperance.
                </p>
            </div>
            <div className="image-beach5">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630283546063-BKJLELGFQ8L5Z8QY7OMO/Lucky+Bay+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1000w" alt="kangaroo"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630283593885-MCHJLDADDMHM7ETQGIEX/Lucky+Bay+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1000w" alt="kangaroo-two"/>
            </div>
            <div className='extra'>
                <h3>TURQUOISE BAY</h3>
                <p>
                This beach is consistently voted 
                as a top beach in Australia and WOW, 
                it really lives up to its name. Like so many beaches in Western Australia, 
                the untouched pristine sand and turquoise water honestly feels like your own private oasis, and it’s 
                great for snorkelling to see the turtles too!
                </p>
                <p>
                Turquoise Bay was our favourite beach stop on our Perth to Exmouth road trip. 
                The expanse of sand is huge and you can walk far out into the shallows to see the marine life here. 
                </p>
                <p>
                Just up the road is the Jurabi Turtle Centre where we were able to learn 
                so much about the turtle species that live here on the Ningaloo coast.
                </p>
            </div>
            <div className="image-beach">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630028262473-BADCLLBPRUF9HIPUEJNA/Turquoise+Bay+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"alt="photo"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630028127001-MHXMXR7Q2SI10EBSZ2X7/Turquoise+Bay+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630028228629-81C51BP3FRXTPWU5QIMD/Turquoise+Bay+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
            </div>
            <div className='extra'>
                <h3>BLUE HAVEN, ESPERANCE</h3>
                <p>
                I will always say that WA and Esperance have so many of Australia’s underrated beaches! 
                You can easily drive along the coast and find a dreamy paradise beach all to yourself in Esperance.
                </p>
                <p>
                Luckily this beach is just a short drive outside Esperance town so is really accessible and a popular spot for locals and tourists. 
                The wooden stairs down to the beach are also iconic and the perfect viewpoint to take in the white 
                sandy beach and turquoise ocean views.
                </p>
            </div>
            
            <div className="image-beach">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630285559156-3ZFEMYY4NRPER0PPI67I/Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630285504558-H5TJZPADLVVEUEYB1DRK/Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630285454475-6CC8Z8A4B187KKQSAAA9/Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists+%7C+australia+bucket+list+ideas?format=750w"/>
            </div>
            <div className='extra'>
                <h3>TWILIGHT BEACH, ESPERANCE</h3>
                <p>
                Just around the headland next to Blue Haven is another stunning beach - Twilight Beach. Can you tell how much I 
                love the beaches in WA?! Because this is another stunning white sand beach 
                Australia has to offer.
                </p>
                <p>
                Twilight Bay is part of the Great Ocean Drive along this coast. Being in a bay, 
                it’s much more protected with smooth rock formations to 
                explore and crystal clear water to spend the day relaxing in.
                </p>
            </div>
            <div className="image-beach5">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630287168287-SYJVVVMLJ077DTQTK8SM/Twilight+Beach+Esperance.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1000w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630300075117-N260ZSRMBOHLR7ZWZXQ0/Twilight+Beach%2C+Esperance.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1000w"/>
            </div>
            <div className='extra'>
                <h2>BEST BEACHES IN QUEENSLAND</h2>
                <p>
                Queensland is our home, and I’m so thankful to live in a state with such amazing beaches to explore. 
                Some of these islands require a boat ride or flight to access them, 
                but they are worth the extra effort.
                </p>
                <p>
                If you’re looking for more Queensland guides to visit these amazing beaches in Australia, don’t miss our Tropical North Queensland post 
                (and this older Tropical North Queensland post too), our Coastal Queensland 
                road trip including lots of stops to see the Southern Great Barrier Reef, and our full guide to 
                Hamilton Island in the Whitsundays.
                </p>
                <h3>LADY ELLIOT ISLAND, SOUTHERN GREAT BARRIER REEF</h3>
                <p>
                Lady Elliot Island in the Southern Great Barrier Reef is a cay with turquoise blue waters filled with manta rays and sea turtles.
                </p>
                <p>
                To access this island, there are two flights daily from Hervey Bay, Brisbane and Gold Coast airports as well as Bundaberg. 
                Our flight took around 30 minutes. Because the island is a closed destination, 
                there is only one air carrier - Seair Pacific. All flights are booked in partnership with the Lady Elliot Island Eco Resort, 
                which is the only place you can stay on the island. In other words, you’ll need to make sure you book your stay and your flights 
                together.
                </p>
                <p>
                The best part about visiting Lady Elliot Island is that you’ll have a chance to try lots of water activities in a responsible a
                nd eco-friendly way. 
                A glass-bottom boat tour and snorkelling tour are included in your stay, and gear is provided for the snorkelling tour.
                </p>
                <p>
                I highly recommend spending some time on the lighthouse side of the island. That’s where we saw a bunch of manta rays and took 
                the photos below (and in the section about Lady Elliot Island in our Southern Great Barrier Reef post). We spotted a black 
                manta ray about 100m from the beach and were able to snorkel alongside it for a while. On top of the manta rays and sea turtles, 
                we also saw eagle rays, tiger sharks, hammerhead sharks, and more.
                </p>
                <p>If you’re looking for a place to disconnect and enjoy the sea life in Australia, add Lady Elliot Island to your Australia 
                    bucket list.
                </p>
            </div>
            <div className="image-beach2">
                <div className='container1'>
                
                    
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630286002197-MPXQH1ECR2SUE68DOSQA/Lady+Elliot+Island+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1500w"/>
                    

                
                    
                
                </div>
            </div>
            <div className='extra'>
                <h3>NUDEY BEACH, FITZROY ISLAND</h3>
                <p>
                Nudey Beach was voted the best beach in Australia and it’s easy to see why! Fitzroy Island is seriously 
                an island paradise, 
                and the best part is that it’s just a 45-minute boat ride from Cairns.
                </p>
                <p>
                Reaching Nudey Beach is an easy 20-minute walk from the resort on the island if you’re staying overnight, 
                and it’s an absolute dream for snorkelling, swimming and seeing marine wildlife.
                </p>
                <p>
                If you’re spending time on Fitzroy Island, you absolutely need to book a boat trip or enjoy some of the watersports on offer. 
                We spent most of our trip to Fitzroy Island on a boat or in the sparkling blue water.
                </p>
                <p>
                There’s lots more information about visiting Fitzroy Island and the famous Nudey Beach in our Tropical North Queensland itinerary. 
                </p>
            </div>
            <div className="image-beach5">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630027243549-U8XSG5PMUV1EQHB81SCA/Nudey+Beach+Fitzroy+Island.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1000w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630286617805-ISQJJ4RFP7PPGBCPU2EM/Nudey+Beach+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1000w"/>
            </div>
            <div className='extra'>
                <h3>WHITEHAVEN BEACH, WHITSUNDAYS</h3>
                <p>
                The Whitsundays are out of this world, and if you have the chance to visit them or fly over them, 
                it’s impossible to pick what part of the Whitsundays is more beautiful. 
                Whitehaven Beach is easily the most famous beach in the Whitsundays though.
                </p>
                <p>
                You’ll need to travel by boat to reach the island, 
                and you can either book on to a boat tour or do what we did and hire a charter boat with a few friends. 
                This was perfect to spread the cost of the charter and gave us so much more flexibility to explore this gorgeous paradise.
                </p>
                <p>
                The sandbars and inlets easily mean you can spend the day here relaxing on the boat and the beach, 
                snorkelling and swimming out to sandbars to see the amazing wildlife here too.
                </p>
                <p>
                Our Whitsundays Guide has all our top tips for planning the best trip to the Whitsundays.
                </p>
            </div>
            <div className="image2">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630025784734-X82US3B1ZYBNB3MUDTTD/Whitehaven+Beach+Whitsundays.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1500w"/>
            </div>
            <div className='extra'>
                <h3>PALM BEACH, GOLD COAST</h3>
                <p>
                One of the best beaches in Queensland, but it also has an extra special place in my heart because it’s my home. 
                We’re so lucky in Australia to have city beaches that are so beautiful, well-maintained and perfect for surfing, 
                swimming and water-sports.
                </p>
                <p>
                There’s nothing I love more than an early morning beach walk followed by a coffee to start my day, 
                and Palm Beach is the perfect place for that in Gold Coast. The sunsets here are the definition of dreamy.
                </p>
            </div>
            <div className="image-beach">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630300895803-526OJM99FA14JBU99T1B/Palm+Beach+Gold+Coast.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630300947857-3Z4XF4NKYQREGQSTAEI4/Palm+Beach+Gold+Coast.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630300798877-3DHMM0R2L2FDEF7H7BRJ/Palm+Beach+Gold+Coast.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
            </div>
            <div className='extra'>
                <h3>MACKAY CAY, DAINTREE RAINFOREST</h3>
                <p>
                Mackay Cay is a small sand cay that’s a little off the beaten track but totally worth adding to your 
                Australian bucket list as one of the most beautiful beaches in Australia.
                </p>
                <p>
                You can only reach it with a boat tour like Ocean Safari Tours who can show you so many gems like this in the area. 
                This cay truly is paradise on earth - just imagine every tropical paradise you can think of 
                and that’s what Mackay Cay is.
                </p>
                <p>
                Located off Cape Tribulation Beach, you’ll need to take a 30-minute boat ride to get here, but this white sandbar in 
                the middle of the turquoise ocean is like nothing else I’ve experienced. The snorkelling here is amazing, 
                and Ocean Safari Tours will supply you with the equipment. With the marine wildlife here, it’s easy to see why it’s often
                 called one of the best snorkelling spots in Australia.
                </p>
                <p>
                The contrast between the glittering turquoise waters, the lush rainforest and the captivating
                 wildlife really makes this a once in a lifetime beach to visit in Australia.
                </p>
            </div>
            <div className="image-beach">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630027090636-Y2ZEMIR1FS0UGHNDVQHX/Mackay+Cay+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630027107180-WX0UNKH83JO0ES4U84IL/Mackay+Cay+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630027128804-JSXC3DE30KAKUSL4WDCZ/Mackay+Cay+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=750w"/>
            </div>
            <div className='extra'>
                <h3>WATHUMBA CREEK, FRASER ISLAND</h3>
                <p>
                This is a contender for one of the bluest beaches in Australia because the sparkling blue water here is such an insane colour!
                </p>
                <p>
                You can reach Fraser Island by taking the Tasman Venture experience boat tour from Hervey Bay in Queensland. 
                It’s a great option if you’re looking for an island day trip from the mainland and it is so worth the price.
                </p>
                <p>
                You won’t be disappointed with the west coast of Fraser Island. 
                The whole coast just blew our minds. Honestly, it was comparable with 
                the Maldives.
                </p>
                <p>
                If you take a day boat tour, 
                you can experience Wathumba Creek, the amazing white powder sand beaches, 
                freshwater creeks, huge sand dunes, snorkelling, swimming and bushwalking. If you do decide to spend longer on Fraser Island, 
                our Fraser Island itinerary has got you covered!
                </p>
            </div>
            <div className="image-beach4">
                    <div className='large'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630299884299-K8JYYXQ9U9XTAS1G5NSG/Wathumba+Creek+Fraser+Island.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1500w"/>
                    </div>
                    <div className='small'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630299952934-0GBNRUZX862LS7MQFZTZ/Wathumba+Creek+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=500w"/>
                    <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630299828588-5EZV3NVUGFWCH1CA2Q48/Wathumba+Creek+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=500w"/>
                    </div>
            </div>
            <div className='extra'>
                <h2>BEST BEACHES IN SOUTH AUSTRALIA</h2>
                <p>
                We recently got to check South Australia off of our bucket list as it was the only state in Australia we had not visited yet.
                 We are so thankful we were able to go and experience these amazing beaches. No list of the best beaches in Australia is
                 complete if it doesn’t include some of these South Australia gems.
                </p>
                <p>
                If you’re wanting to follow in our footsteps, you can get our full itinerary on our coastal South Australia road trip post.
                </p>
                <h3>PORT WILLUNGA, FLEURIEU PENINSULA</h3>
                <p>
                There are some seriously underrated beaches in South Australia, 
                and this is one of them. We kept coming back to Port Willunga because we loved it so much!
                </p>
                <p>
                If you’re visiting the Peninsula, don’t miss the unique beach caves here and the epic sunset views. 
                It’s the perfect romantic sunset spot, especially if you grab a seat in one of the caves to watch the sunset.
                We actually went for a sunset swim here which was so perfect. The remains of the jetty jutting out from the water really 
                give the beach some character too.
                </p>
                <p>
                Honestly, this is THE beach you need to visit if you’re spending some time on the Fleurieu Peninsula. 
                It’s one of the best beaches in South Australia, so make sure you add it to your South Australia itinerary.
                </p>
            </div>
            <div className="image">
            </div>
            <div className='extra'>
                <h3>SELLICKS BEACH, FLEURIEU PENINSULA</h3>
                <p>
                Another one of the awesome beaches on the Fleurieu Peninsula, this one is so fun because you can drive on it 
                (you’ll need a 4WD though!). Driving on the beach with the dramatic backdrop of huge red rock 
                formations makes this the ideal beach if you’re not a fan of slow beach days and you’re looking for a bit of adventure and 
                adrenaline.
                </p>
                <p>
                The cliff ridges that run down to the beach here are super unique, and it’s really worth exploring them on foot 
                before you head down to the beach itself. 
                The cliffs light up at golden hour to create a stunning backdrop for one of Australia’s most unique beaches.
                </p>
            </div>
            <div className="image-beach4">
                <div className='large'>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630026286949-PPG139XA91X4K67HXG9M/Sellicks+Beach+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=1000w"/>
                </div>
                <div className='small'>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630026330596-ZJQ7FNGNQI7112QFMXE6/Sellicks+Beach+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=500w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630026363396-90S52SDM1XBJ7L9JP7C4/Sellicks+Beach+Australia.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=500w"/>
                </div>
            </div>
            <div className='extra'>
                <h3>ETHEL WRECK BEACH, INNES NATIONAL PARK</h3>
                <p>
                I’ve never seen huge waves like the ones I saw at Ethel Wreck Beach before. I was honestly so in awe of the power of the ocean here!
                </p>
                <p>
                Kyle absolutely loved this spot for photography because not only was the surf insane, 
                we were also treated to a pod of dolphins playing in the surf. 
                </p>
                <p>
                Combined with the towering cliffs here, it was another gem in South Australia that we felt so lucky to have experienced!
                </p>
            </div>
            <div className="image-beach7">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630026151286-9BID3VT3O1ZULKMJK48X/Ethel+Wreck+Beach.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=300w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630026108546-MZZZ09KDY9QGM1Q31CK2/Ethel+Wreck+Beach.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=300w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630026200255-LQRUMUEZ96RVYF61H6A8/Ethel+Wreck+Beach.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=300w"/>
            </div>
            <div className='extra'>
                <h2>BEST BEACH IN TASMANIA</h2>
                <p>
                Tasmania is beautiful island state to explore in Australia, and it is home to one of the best beaches in Australia. 
                If you’re planning a trip to Tasmania, you don’t want to miss it as it is one of the most beautiful places in Tasmania.
                </p>
                <h3>BAY OF FIRES</h3>
                <p>
                Bay of Fires is without a doubt one of the top beaches in Australia 
                because of the insane contrast between the fiery red rocks, pristine white sand and crystal blue water. 
                You absolutely need to visit the Bay of Fires on your Tasmania itinerary and see this beach for yourself.
                </p>
                <p>
                What I loved is how different it looked at different times of day. Everything is fiery red at sunset, 
                covered in soft pink hues at sunrise and showing off vibrant contrast during the day.
                </p>
                <p>
                Binalong Bay and Suicide Beach were easily our favourite spots here. I really recommend you visit Suicide Beach if you’re looking for a more secluded spot to enjoy and snap a few photos.
                </p>
            </div>
            <div className="image-beach7">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630025998660-VY1I861P3TJVOQTK1KRP/Bay+of+Fires+Tasmania.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=300w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630025958975-6T0JOL8OPXJEARGCESU3/Bay+of+Fires+Tasmania.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=300w"/>
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630026031129-J4NOSRTEYEL0CHJEX4ZD/Bay+of+Fires+Tasmania.+Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists?format=300w"/>
            </div>
            <div>
                <h3>*****</h3>
                <p>
                Australia is home to countless stunning beaches and this list of Australia’s best beaches could go on forever. 
                Of all the beaches in Australia, these are the ones that will always stick with me and that constantly make me feel in awe of 
                this country I call home. If you can add any of these to your Australia adventures, you won’t regret it! 
                </p>
                <h1 className="last-footer">LIKE THIS POST ? PIN IT FOR LATER AND SHARE IT WITH OTHERS!</h1>
            </div>
            <div className="image-beach6">
                <img src="https://images.squarespace-cdn.com/content/v1/5b5dbd883917ee427d49e685/1630031068853-F4QIAGJRNSKF811QYPNS/Australia+has+some+of+the+best+beaches+in+the+world%2C+so+you+don%27t+want+to+miss+the+beaches+on+this+list+of+the+best+beaches+in+Australia.+The+best+Australia+beaches+includes+the+best+beaches+in+Western+Australia%2C+the+best+beaches+in+Queensland%2C+and+the+best+Beaches+in+South+Australia.+Add+these+beaches+to+your+Australia+bucket+list%21+%7C+australias+best+beaches+%7C+best+beaches+australia+%7C+australia+best+beach+%7C+best+beach+in+australia+%7C+australia+travel+bucket+lists+%7C+australia+bucket+list+ideas?format=1000w"/>
            </div>
            <div className='foot'>
                <h1 className='fit'>
                Please register to travel with us right here, we will give you the best trip
                </h1>
    
            <ul class="wrapper">
            <li class="icon facebook" onClick={handleShare}>
                <span class="tooltip">Facebook</span>
                <svg
                viewBox="0 0 320 512"
                height="1.2em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
                </svg>
            </li>
            <li class="icon twitter" onClick={handleShare2}>
                <span class="tooltip">Twitter</span>
                <svg
                height="1.8em"
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                class="twitter"
                >
                <path
                    d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                ></path>
                </svg>
            </li>
            <li class="icon instagram" onClick={handleShare1}>
                <span class="tooltip">Instagram</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2em"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
                >
                <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                ></path>
                </svg>
            </li>
            </ul>
           
                <CommentSection/>
            </div>
             
            <div className='back-to-top'>
            <button class="button2" onClick={top}>
                <svg viewBox="0 0 384 512" class="svgIcon">
                    <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
            </div>
            <Footer/>
        </div>
        
    );
}
export default Blog;