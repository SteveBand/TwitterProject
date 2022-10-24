import { LatestBtn, PrefBtn, TopTweetsDropDown } from '../../../assets/feedStyled';
import { BsStars } from 'react-icons/bs';
import { BiCog } from 'react-icons/bi';
import { TbArrowsRightLeft } from 'react-icons/tb';

export const TopTweetsDD = () => {
    return (
            <TopTweetsDropDown>
                <article style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', borderBottom: '1px solid gray' }}>
                    <div style={{ marginTop: '15px', fontSize: '60px', width: 'inherit' }}><BsStars /></div>
                    <div style={{ marginBottom: '10px', fontSize: '95%' }}><h2>Home shows you top Tweets first</h2></div>
                </article>
                <LatestBtn>
                    <div style={{ fontSize: '20px', color: 'gray', opacity: '0.7', marginRight: '10px' }}><TbArrowsRightLeft /></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div><p style={{ fontSize: '16px' }}>See latest Tweets instead</p></div>
                        <div><p style={{ fontSize: '14px', color: 'gray' }}>You'll see Tweets show up as they happen.</p></div>
                    </div>
                </LatestBtn>
                <PrefBtn>
                    <div style={{ fontSize: '20px', color: 'gray', opacity: '0.8', marginRight: '10px' }}><BiCog /></div>
                    <div><p style={{ fontSize: '16px' }}>View content preferences</p></div>
                </PrefBtn>
            </TopTweetsDropDown>
    );
}