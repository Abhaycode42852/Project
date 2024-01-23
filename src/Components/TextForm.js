import React,{useState} from 'react'
export default function TextForm(props){
    // let style={
    // position: 'fixed',
    // bottom:93+'vh',
    // left: 87+'vw'
    // }
    const handleUPClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success")
    }
    const handleLPClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")

    }
    const handleReverse=()=>{
        let newText="";
        for (let i= text.length-1;i>=0;i--){
            newText+=text[i];
        }
        setText(newText);
        props.showAlert("Text Reversed","primary")

    }
    const Change=(event)=>{
        // console.log('changed')
        setText(event.target.value);

    }
    const handleClear=(event)=>{
        // console.log('changed')
        setText("");
        props.showAlert("Text Cleared","danger")
    }
    const handleCopy=()=>{
        // let text= document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success")

    }
    const handleExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert("Extra Spaces Removed","success")

    }
    const handleSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(''));
        props.showAlert("All Spaces Removed","warning")

    }
    const handleSpeech=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speech activated","success")

    }
    const eachUpper=()=>{
        let words= text.toLowerCase().split(" ");
        let newwords= words.map((Wrd)=>{
            return Wrd.charAt(0).toUpperCase()+Wrd.slice(1);
        });
        let newText= newwords.join(' '); 
        setText(newText);
        props.showAlert("First Letter Converted to UPPERCASE","success")

    }
    const [text , setText]=useState('click on uppercase');
    let Arr= text.split(/\s+/);
    let len= Arr.length;
    for(let i=0;i<Arr.length;i++){
        if (Arr[i]===" "){
            len-=1;
        }
        else if(Arr[i]===""){
            len-=1;
        }
    };
    // const [btnText,setbtnText]=useState('Enable Dark Mode')
    const [Fword,setFword]=useState('click');
    const [Rword,setRword]=useState('Replaced');
    const handleFindChange=(event)=>{
        setFword(event.target.value);
    }
    const handleReplaceChange=(event)=>{
        setRword(event.target.value);
    }
    const handleReplaceClick=()=>{
        let newText=text.replaceAll(Fword,Rword);
        setText(newText);
        props.showAlert("Replaced","success") 


    }

//       color:'black',
//       backgroundColor:'white'
//   })
//   const dark=()=>{
//     if(myStyle.color==='black'){
//       setmyStyle({
//         color:'white',
//         backgroundColor:'black'
//       })
//       setbtnText('Enable Light Mode')
//     }
//     else{
//       setmyStyle({
//         color:'black',
//         backgroundColor:'white'
//       })
//       setbtnText('Enable Dark Mode')
//     }
//   }
    
    return(
    <>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
    <div className='container'>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className='form-control' value={text} onChange={Change} id="myBox" rows="10" style={{backgroundColor:props.mode==="dark"?"#201e28":"rgb(172 171 186 / 36%)",color:props.mode==="dark"?"white":"black"}
        }></textarea>
            <button className='btn btn-outline-danger my-2' onClick={handleClear}>Clear Text </button>
            <button className='btn btn-outline-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-outline-warning ' onClick={handleSpeech}>Speech</button>
        </div>
        <textarea className='mx-2' value={Fword} id='find' onChange={handleFindChange} rows={1} cols={20} style={{backgroundColor:props.mode==="light"?"##eeedf4":"rgb(172 171 186 / 36%)",color:props.mode==="light"?"black":"white"}}></textarea>
        <textarea value={Rword} onChange={handleReplaceChange} rows={1} cols={20} style={{backgroundColor:props.mode==="light"?"##eeedf4":"rgb(172 171 186 / 36%)",color:props.mode==="light"?"black":"white"}}></textarea>
        <div className="container" style={{display:'flex',justifyContent:"space-evenly"}}>
        <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleReplaceClick}>Replace </button>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUPClick}>Convert to UPPERCASE </button>
        <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleLPClick}>Convert to lowercase </button>
        <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleReverse}>Reversecase </button>
        <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={eachUpper}>Each Uppercase </button>
        <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces </button>
        <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleSpaces}>Remove All Spaces </button>
        </div>
    </div>
    <div className="container" >
        <h2>Your Text Summary</h2>
        <b className='bold'><p className='container'>{len} words & {text.length} characters(spaces incl.)</p>
        <p className='container'>{0.008*(len)}MINs Time required to READ</p></b>
    
    <h3>Preview</h3>
        {/* <textarea rows='8' className='form-control'>{text}</textarea> it did not work*/}
        <p style={{backgroundColor:props.mode==="light"?"#fcf3e8":"#1e214a"}}>{text.length>0?text:"Enter your Text for Preview"}</p>
    </div>
    {/* <button type="button" className="btn btn-dark d-flex" id='btnDark' onClick={dark} style={style}>{btnText}</button> */}
    </div>
    </>
    )
}