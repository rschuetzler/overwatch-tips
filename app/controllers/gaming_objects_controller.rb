class GamingObjectsController < ApplicationController
  before_action :set_gaming_object, only: [:show, :edit, :update, :destroy]

  # GET /gaming_objects
  def index
    @type = params[:type]
    @gaming_objects = GamingObject.where(type: @type)
  end

  # GET /gaming_objects/1
   def show
   end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gaming_object
      @gaming_object = GamingObject.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def gaming_object_params
      params.require(:gaming_object).permit(:name, :description, :type)
    end
end