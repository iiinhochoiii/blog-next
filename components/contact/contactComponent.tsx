import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import {contacts} from '../../stores/contact/types';
import moment from 'moment';
import TextTruncate from 'react-text-truncate'; // recommend
import TextareaAutosize from 'react-textarea-autosize';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props{
    contacts:contacts[];
    deleteContact:(contact_id:number)=>void;
    loading:boolean;
}
const ContactComponent: React.FC<Props> = ({contacts, deleteContact, loading}) =>{
    const [selectNum, setSelectNum] = useState<number>(-1);

    const selectHandler = (num:number) =>{
        if(num === selectNum){
            setSelectNum(-1);
        } else{
            setSelectNum(num);
        }
    } 

    const deleteHandler = (num:number) =>{
        if(confirm("정말로 삭제하시겠습니까?")){
            deleteContact(num);
        }
    }
    return(
        <ContactWrap>
            <Background style={{backgroundImage:`url(${"./images/about_background.jpg"})`}}>
                <div>
                    <h1>Contact</h1>
                    <p>What messages have come?</p>
                </div>
            </Background>
            
            {loading?<CircularProgress />:
                contacts.length>0?
                <ContactContainer>
                    <h1>Received Message</h1>
                    <table>
                        <thead>
                            <tr>
                                <th className="th_number">번호</th>
                                <th className="th_message">내용</th>
                                <th className="th_date">보낸날짜</th>
                            </tr>
                        </thead>
                        {
                            contacts.map((item)=>
                            <tbody key={item.contact_id}>
                                <tr className="main_container" onClick={()=>selectHandler(item.contact_id)}>
                                    <td className="td_number">{item.contact_id}</td>
                                    <td className="td_message">
                                    <TextTruncate
                                        line={1}
                                        element="p"
                                        truncateText="…"
                                        text={item.message}
                                        />  
                                    </td>
                                    <td className="td_date">{moment(item.created_at).format("YYYY-MM-DD HH:mm:ss")}</td>
                                </tr>
                                {selectNum===item.contact_id&&
                                <tr className="message_container">
                                    <td></td>
                                    <td>
                                        <p>이름: {item.name}</p>
                                        <p>이메일: {item.email}</p>
                                        <p>휴대폰 번호: {item.phone}</p>
                                        <TextareaAutosize value={item.message} readOnly/>
                                        <p style={{cursor:"pointer"}} onClick={()=>deleteHandler(item.contact_id)}>삭제</p>
                                    </td>
                                    <td></td>
                                </tr>
                                }
                            </tbody>)
                        }
                    </table>
                </ContactContainer>:
                <ContactContainer>
                    <h1>Received Message</h1>
                    <p>전송된 메세지가 없습니다.</p>
                </ContactContainer>
            }
        </ContactWrap>
    );
}

const ContactWrap = styled.div``;

const Background = styled.div`
    height:300px;
    background-size:100% 600px;
    background: no-repeat center;
    position: relative;
    &>div{
        background:rgba(0,0,0,0.3);
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        text-align:center;
        padding-top:100px;
        &>h1{
            margin:0;
            color:#ffffff;
            font-size:42px;
        }
        &>p{
            margin:20px 0px 0px 0px;
            color:#ffffff;
            font-size:18px;
            font-weight:bold;
        }
    }
`;

const ContactContainer = styled.div`
    width:980px;
    max-width:100%;
    margin:30px auto;
    &>h1{
        margin:0px;
        font-size:22px;
    }
    &>table{
        margin-top:30px;
        width:100%;
        border-top:1px solid gray;
        border-bottom:1px solid gray;
        border-spacing:0px;
        &>thead{
            &>tr{
                height:50px;
                text-align:center;
                &>.th_number{
                    width:10%;
                }
                &>.th_message{
                    width:70%;
                }
                &>.th_date{
                    width:20%;
                }
            }
        }
        &>tbody{
            &>.main_container{
                cursor: pointer;
                &>td{
                    height:50px;
                    font-size:14px;
                    border-top:1px solid gray;
                }
                &>.td_number, .td_date{
                    text-align:center;
                }
                &>.td_message{
                    text-align:left;
                }
            }
            &>.message_container{
                background-color:#e5e5e5;
                &>td{
                    padding:25px 0px;
                    border:none;
                    &>p{
                        margin:5px 0px;
                        font-size:14px;
                    }
                    &>textarea{
                        width:100%;
                        border:none;
                        border-top:1px solid gray;
                        border-bottom:1px solid gray;
                        resize:none;
                        outline:none;
                        line-height:30px;
                        background:none;
                        padding:10px 0px;
                    }
                }
            }
        }
    }
`;
export default ContactComponent;