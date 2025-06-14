import { Routes, Route } from 'react-router-dom';
import Home from '../HomePage/HomeScreen/HomeScreen';
import TermsConditions from '../HomePage/Policies/TermsConditions';
import PrivacyPolicy from '../HomePage/Policies/PrivacyPolicy';
import RefundPolicy from '../HomePage/Policies/RefundPolicy';

const HomePageRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/terms_and_conditions" element={<TermsConditions />} />

        <Route path="/privacy_policy" element={<PrivacyPolicy />} />

        <Route path="/refund_policy" element={<RefundPolicy />} />

        {/* for invalid route */}
        <Route path='*' element={<div style={{marginTop:'200px',textAlign:'center', fontSize:'30px', fontWeight:'bold', color:'rgb(192, 191, 191)'}}>404 Not Found</div>}/>
    </Routes>
);


export default HomePageRoutes;