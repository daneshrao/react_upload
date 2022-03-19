import React from 'react'
import dockerIcon from "../../assets/icons8-docker.svg";
import elkIcon from "../../assets/elastic.svg";
import kubeIcon from "../../assets/kube.png";
import jsIcon from "../../assets/js-icon.svg";
import grafanaIcon from "../../assets/grafana.svg";
import pythonIcon from "../../assets/python.svg";
import vsIcon from "../../assets/vscode-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import PrometheusIcon from "../../assets/prometheus.svg";
import gitHubIcon from "../../assets/github.png";
import golangIcon from "../../assets/go_svg.png"
import bitbucketIcon from "../../assets/bitbucket.jpeg"
import awsIcon from "../../assets/aws.png"
import azureIcon from "../../assets/azure.png"
import ansibleIcon from "../../assets/ansible.png"
import terraIcon from "../../assets/terraform.png"
import gitlabIcon from "../../assets/gitlab.png"
import JenIcon from "../../assets/jenkins.jpeg"
import JiraIcon from "../../assets/jira.svg"
import HelmIcon from "../../assets/Helm.png"






export default function Skills() {
  return (
    <>
    <div class="w-full min-h-screen bg-gray-50 p-6">

<h1 class="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4 text-gray-500">SKILL <span class="text-blue-700">MATRIX</span></h1>



<div class="flex flex-wrap justify-center">

    <div class="flex flex-col bg-white rounded-lg shadow-xl  w-full m-6 overflow-hidden sm:w-52 hover:bg-blue-300 hover:text-white">
      <div className='m-6 p-4 text-center'>
        <h2 className='text-center font-semibold text-xl pb-6'>Programming</h2>
        <ul>
          <li className='pb-4 font-light text-normal'>python <span ><img className='h-10 w-10 inline-block ml-2'src={pythonIcon} alt="" /></span><hr className='m-2'/></li>
          <li className='pb-4 font-light text-normal'>Javascript<span ><img className='h-10 w-10 inline-block ml-2'src={jsIcon} alt="" /></span><hr className='m-2'/></li>
          <li className='pb-4 font-light text-normal'>Golang <span ><img className='h-10 w-10 inline-block ml-2'src={golangIcon} alt="" /></span><hr className='m-2'/></li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col bg-white rounded-lg shadow-xl  w-full m-6 overflow-hidden sm:w-52 hover:bg-blue-300 hover:text-white">
      <div className='m-6 p-4 text-center'>
      <h2 className='text-center font-semibold text-xl pb-6'>Front-end</h2>
      <ul>
      <li className='pb-4 font-light text-normal'>Css<span ><img className='h-10 w-10 inline-block ml-2'src={cssIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>HTML <span ><img className='h-10 w-10 inline-block ml-2'src={htmlIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>React JS <span ><img className='h-10 w-10 inline-block ml-2'src={reactIcon} alt="" /></span><hr/></li>
            </ul>
      </div>
    </div>

    <div class="flex flex-col bg-white rounded-lg shadow-xl  w-full m-6 overflow-hidden sm:w-52 hover:bg-blue-300 hover:text-white">
      <div className='m-6 p-4 text-center'>
      <h2 className='text-center font-semibold text-xl pb-6'>Containerization</h2>
        <ul>
        <li className='pb-4 font-light text-normal'>Docker<span ><img className='h-10 w-10 inline-block ml-2'src={dockerIcon} alt="" /></span><hr className='m-2'/></li>

          <li className='pb-4 font-light text-normal'>Kubernetes <span ><img className='h-10 w-10 inline-block 'src={kubeIcon} alt="" /></span><hr className='m-2'/></li>
      
        </ul>
      </div>
    </div>

    <div class="flex flex-col bg-white rounded-lg shadow-xl  w-full m-6 overflow-hidden sm:w-52 hover:bg-blue-300 hover:text-white">
      <div className='m-6 p-4 text-center'>
      <h2 className='text-center font-semibold text-xl pb-6'>SCM</h2>
      <ul>
              <li className='pb-4 font-light text-normal'>Github <span ><img className='h-10 w-10 inline-block ml-2'src={gitHubIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Bitbucket<span ><img className='h-8 w-8 inline-block ml-2'src={bitbucketIcon} alt="" /></span><hr/></li>
            </ul>
      </div>
    </div>

    <div class="flex flex-col bg-white rounded-lg shadow-xl w-full m-6 overflow-hidden sm:w-52 hover:bg-blue-300 hover:text-white">
      <div className='m-6 p-4 text-center'>
      <h2 className='text-center font-semibold text-xl pb-6'>Cloud</h2>
      <ul>
      <li className='pb-4 font-light text-normal'>AWS <span ><img className='h-10 w-10 inline-block ml-2'src={awsIcon} alt="" /></span><hr className='m-2'/></li>
      <li className='pb-4 font-light text-normal'>Azure<span ><img className='h-10 w-10 inline-block ml-2'src={azureIcon} alt="" /></span><hr className='m-2'/></li>
      </ul>
      </div>
    </div>

    <div class="flex flex-col bg-white rounded-lg shadow-xl  w-full m-6 overflow-hidden sm:w-52 hover:bg-blue-300 hover:text-white">
      <div className='m-6 p-4 text-center'>
      <h2 className='text-center font-semibold text-xl pb-6'>Monitoring</h2>
      <ul>
      <li className='pb-4 font-light text-normal'>Prometheus <span ><img className='h-9 w-9 inline-block'src={PrometheusIcon} alt="" /></span><hr className='m-2'/></li>
              <li className='pb-4 font-light text-normal'>Grafana<span ><img className='h-10 w-10 inline-block ml-2'src={grafanaIcon} alt="" /></span><hr className='m-2'/></li>
              <li className='pb-4 font-light text-normal'>Elastic <span ><img className='h-10 w-10 inline-block ml-2'src={elkIcon} alt="" /></span><hr className='m-2'/></li>
            </ul>
      </div>
    </div>

  </div>

  <div class="m-6 flex justify-center ">
  <div className=' '>
        <div className='p-5 flex flex-col items-center bg-slate-50 w-full rounded-lg shadow-xl  hover:bg-blue-300 hover:text-white'>
            <h2 className='pb-5 font-mono font-semibold text-xl'>DEVOPS Tools</h2>
            <ul className='m-7 p-5 flex flex-row flex-wrap space-x-8'>
              <li className='pb-4 font-light text-normal'>Ansible <span ><img className='h-10 w-10 inline-block ml-2'src={ansibleIcon} alt="" /></span><hr className='m-2'/></li>
              <li className='pb-4 font-light text-normal'>Terraform<span ><img className='h-10 w-10 inline-block ml-2'src={terraIcon} alt="" /></span><hr className='m-2'/></li>
              <li className='pb-4 font-light text-normal'>Jenkins<span ><img className='h-10 w-10 inline-block ml-2'src={JenIcon} alt="" /></span><hr className='m-2'/></li>
              <li className='pb-4 font-light text-normal'>Gitlab<span ><img className='h-10 w-10 inline-block ml-2'src={gitlabIcon} alt="" /></span><hr className='m-2'/></li>
              <li className='pb-4 font-light text-normal'>Jira<span ><img className='h-10 w-10 inline-block ml-2'src={JiraIcon} alt="" /></span><hr className='m-2'/></li>
              <li className='pb-4 font-light text-normal'>Helm<span ><img className='h-10 w-10 inline-block ml-2'src={HelmIcon} alt="" /></span><hr className='m-2'/></li>
            </ul>
        </div>
      </div>
  </div>
    {/* <div className='flex text-2xl text-gray-400 font-bold justify-center mt-[3vh]'>SKILL MATRIX</div>
    <div class='flex flex-wrap justify-center' >
      <div className=' bg-slate-50 w-full min-h-screen shadow-2xl hover:bg-blue-300 hover:text-white'>
        <div className=' p-5 flex flex-col items-center justify-center rounded-lg w-full m-6'>
            <h2 className='pb-5 font-mono font-semibold'>PROGRAMMING</h2>
            <ul>
              <li className='pb-4 font-light text-normal'>python <span ><img className='h-10 w-10 inline-block ml-2'src={pythonIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Javascript<span ><img className='h-10 w-10 inline-block ml-2'src={jsIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Golang <span ><img className='h-10 w-10 inline-block ml-2'src={golangIcon} alt="" /></span><hr/></li>
            </ul>
        </div>
      </div> */}

      {/* <div className=' bg-slate-50 h-[20vh] w-[20vw] mt-[5vh] ml-20 rounded-3xl shadow-2xl hover:bg-blue-300 hover:text-white'>
        <div className='p-5 flex flex-col items-center'>
            <h2 className='pb-5 font-mono font-semibold'>CONTAINERIZATION</h2>
            <ul>
              <li className='pb-4 font-light text-normal'>Kubernetes <span ><img className='h-10 w-10 inline-block ml-2'src={kubeIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Docker<span ><img className='h-10 w-10 inline-block ml-2'src={dockerIcon} alt="" /></span><hr/></li>
            </ul>
        </div>
      </div>

      <div className=' bg-slate-50 h-[25vh] w-[20vw] mt-[5vh] ml-20 rounded-3xl shadow-2xl hover:bg-blue-300 hover:text-white'>
        <div className='p-5 flex flex-col items-center'>
            <h2 className='pb-5 font-mono font-semibold'>FRONT-END</h2>
            <ul>
              <li className='pb-4 font-light text-normal'>HTML <span ><img className='h-10 w-10 inline-block ml-2'src={htmlIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Css<span ><img className='h-10 w-10 inline-block ml-2'src={cssIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>React JS <span ><img className='h-10 w-10 inline-block ml-2'src={reactIcon} alt="" /></span><hr/></li>
            </ul>
        </div>
      </div>

      <div className=' bg-slate-50 h-[25vh] w-[20vw] mt-[7vh] ml-20 rounded-3xl shadow-2xl  hover:bg-blue-300 hover:text-white'>
        <div className='p-5 flex flex-col items-center'>
            <h2 className='pb-5 font-mono font-semibold'>MONITORING</h2>
            <ul>
              <li className='pb-4 font-light text-normal'>Prometheus <span ><img className='h-10 w-10 inline-block ml-2'src={PrometheusIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Grafana<span ><img className='h-10 w-10 inline-block ml-2'src={grafanaIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Elastic <span ><img className='h-10 w-10 inline-block ml-2'src={elkIcon} alt="" /></span><hr/></li>
            </ul>
        </div>
      </div>


      <div className=' bg-slate-50 h-[20vh] w-[20vw] mt-[7vh] ml-20 rounded-3xl shadow-2xl  hover:bg-blue-300 hover:text-white'>
        <div className='p-5 flex flex-col items-center'>
            <h2 className='pb-5 font-mono font-semibold'>SCM</h2>
            <ul>
              <li className='pb-4 font-light text-normal'>Github <span ><img className='h-10 w-10 inline-block ml-2'src={gitHubIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Bitbucket<span ><img className='h-10 w-10 inline-block ml-2'src={bitbucketIcon} alt="" /></span><hr/></li>
            </ul>
        </div>
      </div>

      <div className=' bg-slate-50 h-[20vh] w-[20vw] mt-[7vh] ml-20 rounded-3xl shadow-2xl  hover:bg-blue-300 hover:text-white'>
        <div className='p-5 flex flex-col items-center'>
            <h2 className='pb-5 font-mono font-semibold'>CLOUD</h2>
            <ul>
              <li className='pb-4 font-light text-normal'>AWS <span ><img className='h-10 w-10 inline-block ml-2'src={awsIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Azure<span ><img className='h-10 w-10 inline-block ml-2'src={azureIcon} alt="" /></span><hr/></li>
            </ul>
        </div>
      </div>

      <div className=' bg-slate-50 h-[30vh] w-[40vw] mt-[5vh] mb-[2vh] ml-20 rounded-3xl shadow-2xl  hover:bg-blue-300 hover:text-white'>
        <div className='p-5 flex flex-col items-center'>
            <h2 className='pb-5 font-mono font-semibold'>DEVOPS</h2>
            <ul className='m-7 p-5 flex flex-row flex-wrap space-x-8'>
              <li className='pb-4 font-light text-normal'>Ansible <span ><img className='h-10 w-10 inline-block ml-2'src={ansibleIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Terraform<span ><img className='h-10 w-10 inline-block ml-2'src={terraIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Jenkins<span ><img className='h-10 w-10 inline-block ml-2'src={JenIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Gitlab<span ><img className='h-10 w-10 inline-block ml-2'src={gitlabIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Jira<span ><img className='h-10 w-10 inline-block ml-2'src={JiraIcon} alt="" /></span><hr/></li>
              <li className='pb-4 font-light text-normal'>Helm<span ><img className='h-10 w-10 inline-block ml-2'src={HelmIcon} alt="" /></span><hr/></li>
            </ul>
        </div>
      </div> */}
  </div>
    
    </>

    
  )
}
