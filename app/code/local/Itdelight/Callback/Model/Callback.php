<?php
/**
 * Itdelight Callback
 *
 * @author     ItDelight Team
 * @contact    info@itdelight.com
 * @category   module configuration
 * @package    Itdelight_Callback
 * @site       https://itdelight.com/
 * @copyright  Copyright (c) 2016 Itdelight Callback
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
class Itdelight_Callback_Model_Callback extends Mage_Core_Model_Abstract
{
    /**
     * Itdelight_Callback_Model_Callback construct.
     */
    public function _construct()
    {
        parent::_construct();
        $this->_init('itdelight_callback/callback');
    }

    /**
     * @return Mage_Core_Model_Abstract
     */
    public function _beforeSave() {
        if($this->isObjectNew()) {
            $data['created'] = Mage::getModel('core/date')->date('Y-m-d H:i:s');
            $this->setData($data);
        }

        return parent::_beforeSave();
    }
}