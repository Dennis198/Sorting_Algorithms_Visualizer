import React from 'react'
import "./SortVisualizer.css"
import {mergeSort} from "../sortingAlgorithms/mergeSort";
import {bubbleSort} from "../sortingAlgorithms/bubbleSort";
import {insertionSort} from "../sortingAlgorithms/insertionSort";
import {quickSort} from "../sortingAlgorithms/quickSort";
import {heapSort} from "../sortingAlgorithms/heapSort";
import {cocktailSort} from "../sortingAlgorithms/cocktailSort"
import {selectionSort} from "../sortingAlgorithms/selectionSort";
import {bogoSort} from "../sortingAlgorithms/bogoSort";
import {shellSort} from "../sortingAlgorithms/shellSort";
import {radixSort} from "../sortingAlgorithms/radixSort";
import {gnomeSort} from "../sortingAlgorithms/gnomeSort";
import { Button, Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

  /**
  Code for the custom slider look
  * */ 
  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };

  const PrettoSlider = withStyles({
    root: {
      color: 'red',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
/**End Slide Code */

  const DEFAULT_SPEED=5;
  const DEFAULT_BAR_SIZE=5;
  const DEFAULT_BAR_SLIDER=2;
  const DEFAULT_MAX_VALUE=300;
  const DEFAULT_MIN_VALUE=5;

export default class SortVisualizer extends React.Component{
    intervalID = 0;
    intervalID_isSortFinished = 0;
    constructor(props){
        super(props);

        this.state = {
            array: [],
            computeSpeed: DEFAULT_SPEED,
            isRunning: false,
            barSize: DEFAULT_BAR_SIZE,
            sliderValue: DEFAULT_BAR_SLIDER,
        }

    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(sizeBar=136){
        const array = [];
        for(let i=0; i<sizeBar; i++){
            array.push(Math.floor(Math.random() * DEFAULT_MAX_VALUE) + DEFAULT_MIN_VALUE);
        }
        this.setState({array});
    }

    //Compute and animate Bubble sort
    bubbleSort(){
        let newArray = this.state.array.slice();      
        const animations = bubbleSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animte Insertion Sort
    insertionSort(){
        let newArray = this.state.array.slice();      
        const animations = insertionSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animte Insertion Sort
    radixSort(){
        let newArray = this.state.array.slice();      
        const animations = radixSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animte Insertion Sort
    shellSort(){
        let newArray = this.state.array.slice();      
        const animations = shellSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animate Selection sort
    selectionSort(){
        let newArray = this.state.array.slice();      
        const animations = selectionSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animate Bogo sort
    bogoSort(){
        let newArray = this.state.array.slice();      
        const animations = bogoSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animate Bogo sort
    gnomeSort(){
        let newArray = this.state.array.slice();      
        const animations = gnomeSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animate Bogo sort
    cocktailSort(){
        let newArray = this.state.array.slice();      
        const animations = cocktailSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animate merge sort
    mergeSort(){
        let newArray = this.state.array.slice();      
        const animations = mergeSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animate quick sort
    quickSort(){
        let newArray = this.state.array.slice();      
        const animations = quickSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations,newArray);
    }

    //Compute and animate heap sort
    heapSort(){
        let newArray = this.state.array.slice();      
        const animations = heapSort(newArray);
        this.setState({isRunning: true});
        this.animateSort(animations, newArray);
    }
    
    //Animates the Sorting Algorithms
    animateSort(animations,newArray){
        this.resetColor();

        let index=0;
        let success = false;
        this.intervalID = setInterval(() => {
            const arrayBars = document.getElementsByClassName('sortvisualizer__ArrayBar');
            const [colorChange, colorValue, barOneIdx, barTwoIdx_OR_Height] = animations[index];
            if(colorChange){
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx_OR_Height].style;
                const color = colorValue ? 'lightcoral' : 'darkslateblue';
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }else{
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${barTwoIdx_OR_Height}px`;               
            }
            index++;
            if(index===animations.length) {
                this.stopInterval(this.intervalID);
                success=true;
            }
        },this.state.computeSpeed);

        //Checks every 500ms if Sorting animation is finished
        this.intervalID_isSortFinished = setInterval(() => {
            if(success){
                const arrayBars = document.getElementsByClassName('sortvisualizer__ArrayBar');
                for(let i=0; i<this.state.array.length;i++){
                        const barOneStyle = arrayBars[i].style;
                        barOneStyle.backgroundColor = "green";
                } 
                this.stopInterval(this.intervalID_isSortFinished);
                this.setState({isRunning: false, array: newArray});
            }
        },500);
    }

       //Stops the "Visual" Training
    stopInterval(id){
        clearInterval(id);
        this.setState({isRunning:false});
    }

    stopAllInterval(){
        this.stopInterval(this.intervalID);
        this.stopInterval(this.intervalID_isSortFinished);
    }

    resetColor(){
            const arrayBars = document.getElementsByClassName('sortvisualizer__ArrayBar');
            for(let i=0; i<this.state.array.length;i++){
                    const barOneStyle = arrayBars[i].style;
                    barOneStyle.backgroundColor = "darkslateblue";              
            }
    }

    //event Handler for Speed Change (animation speed)
    handleSpeedChange(e, val){ 
        this.setState({computeSpeed : val})
    }

    //event Handler for size and count of Bars
    handleSizeChange(e, val){
        const arrayBars = document.getElementsByClassName('sortvisualizer__ArrayBar');
        for(let i=0; i<this.state.array.length;i++){
                const barOneStyle = arrayBars[i].style;
                barOneStyle.backgroundColor = "darkslateblue";
        }
        switch(val){
            case 0:
                this.resetArray(320);
                this.setState({barSize: 1});
                break;
            case 1:
                this.resetArray(190);
                this.setState({barSize: 3});
                break;
            case 2:
                this.resetArray(136);
                this.setState({barSize: 5});
                break; 
            case 3:
                this.resetArray(80);
                this.setState({barSize: 10});
                break;
            case 4:
                this.resetArray(40);
                this.setState({barSize: 20});
                break;
            case 5:
                this.resetArray(20);
                this.setState({barSize: 40});
                break;
            default:;     
        }
        this.setState({sliderValue: val});
    }

    render(){
        const {array, isRunning, barSize} = this.state;

        return(
            <div className="sortvisualizer">
                <div className="sortvisualizer__Button">
                        <Button disabled={isRunning} variant="contained" color="secondary" onClick={(e) => this.handleSizeChange(e,this.state.sliderValue)}>Generate New Numbers</Button>
                        <Button variant="contained" color="secondary" onClick={() => this.stopAllInterval()}>Stop</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.bubbleSort()}>Bubble Sort</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.selectionSort()}>Selection Sort</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.insertionSort()}>Insertion Sort</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.mergeSort()}>Merge Sort</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.quickSort()}>Quick Sort</Button>
                    </div>
                    <div className="sortvisualizer__Button">
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.heapSort()}>Heap Sort</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.cocktailSort()}>Cocktail Sort</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.gnomeSort()}>Gnome Sort</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.radixSort()}>Radix Sort</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.shellSort()}>Shell Sort</Button>
                        <Button disabled={isRunning} variant="contained" color="primary" onClick={() => this.bogoSort()}>Bogo Sort</Button>
                    </div> 
                <div className="sortvisualizer__ArrayBars">
                    {array.map((value,idx) =>(
                        <div className="sortvisualizer__ArrayBar" key={idx} style={{height: `${value}px`, width:`${barSize}px`}}>                      
                        </div>
                    ))}
                    <div className="sortvisualizer__ArrayBar_Stabalizer" key={5000} style={{height: `300px`, width:`5px`}}>                      
                        </div>
                </div>
                <div className="sortvisualizer__Sliders">
                        <div className="sortvisualizer__Slider">
                            <PrettoSlider disabled={isRunning} valueLabelDisplay="off" aria-label="pretto slider" defaultValue={5} min={0} max={50}
                                onChange={(e, val) => this.handleSpeedChange(e, val)}  
                            />
                            <div className="sortvisualizer__Slider__Label">
                                <h5>Fast</h5>
                                <h4>Compute Speed</h4>
                                <h5>Slow</h5>
                            </div>
                        </div>
                        <div className="sortvisualizer__Slider">
                            <PrettoSlider disabled={isRunning} valueLabelDisplay="off" aria-label="pretto slider" defaultValue={DEFAULT_BAR_SLIDER} min={0} max={5}
                                marks={true} onChangeCommitted={(e, val) => this.handleSizeChange(e,val)}
                             />
                            <div className="sortvisualizer__Slider__Label">
                                <h5>Small</h5>
                                <h4>Bar Size</h4>
                                <h5>Big</h5>
                            </div>
                        </div>
                </div>
            </div>
        )
    };
}
