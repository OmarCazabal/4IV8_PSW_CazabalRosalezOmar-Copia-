/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Alumno
 */
public class EliminaAlumno extends HttpServlet {

     private Connection con;
    private Statement set;
    private ResultSet rs;
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
      response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Elimar alumno</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Alumno dado de Baja</h1>");
            out.println("<h1>error no se puedo dar de baja</h1>");
            out.println("</body>");
            out.println("</html>");
            
            
            try{
                //delete from alumnosbatiz where boleta
          int boleta = Integer.parseInt(request.getParameter("boletaelimina"));
                
                String q ="delete from alumnobatiz where boleta ="+boleta;
                    set.executeUpdate(q);
                    out.println("<h1>Alumno Dado de Baja</h1>");
                    System.out.println("Dato eliminado");
                    
                
                    System.out.println("Dato eliminado");
                    
                }
                
                
            catch(Exception e){
                System.out.println("Error no se puede eliminar, verificar el dato de busqueda");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<h1>Error no se pudo dar de baja</h1>");
            
            }
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
