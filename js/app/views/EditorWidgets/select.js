boxEditorControls['select']=GridBackbone.View.extend({
    className: "grid-editor-widget-select",
    initialize:function(){

    },
    render:function(){
        var html="<label>"+this.model.structure.label+"</label><select>";
        var self=this;
        _.each(this.model.structure.selections,function(elem){
            var selected="";
            if(self.model.container[self.model.structure.key]==elem.key)selected="selected";
            html+="<option "+selected+" value='"+elem.key+"'>"+elem.text+"</option>";
        });
        html=html+"</select>";
        jQuery(this.$el).html(html);
        return this;
    },
    fetchValue:function(){
        return jQuery(this.$el).find("select").val();
    }
});