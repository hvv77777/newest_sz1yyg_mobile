import Member from '@/pages/member/Member.vue';
import Balance from './views/Balance.vue';
import Packet from './views/Packet.vue';
import Set from './views/Set.vue';
import infoEdit from './views/infoEdit.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Reset from './views/Reset.vue';
import Next from './views/Next.vue';
import Forget from './views/Forget.vue';
import Add_address from './views/Add_address.vue';
import Address from './views/Address.vue';
import Common_question from './views/Common_question.vue';


export default {
    routes:[
        {
            path: '/member',
            name: 'member',
            component: Member
        },{
        	path:'/member/balance',
        	name:'balance',
        	component:Balance
        },{
        	path:'/member/packet',
        	name:'packet',
        	component:Packet
        },{
        	path:'/member/set',
        	name:'set',
        	component:Set
        },{
        	path:'/member/infoEdit',
        	name:'infoEdit',
        	component:infoEdit
        },{
        	path:'/member/login',
        	name:'login',
        	component:Login
        },{
        	path:'/member/register',
        	name:'register',
        	component:Register
        },{
        	path:'/member/reset',
        	name:'reset',
        	component:Reset
        },{
        	path:'/member/next',
        	name:'next',
        	component:Next
        },{
        	path:'/member/forget',
        	name:'forget',
        	component:Forget
        },{
        	path:'/member/add_address',
        	name:'add_address',
        	component:Add_address
        },{
        	path:'/member/address',
        	name:'address',
        	component:Address
        },{
        	path:'/member/common_question',
        	name:'common_question',
        	component:Common_question
        }
    ]
}